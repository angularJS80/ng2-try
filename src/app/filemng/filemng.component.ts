import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../_services/apiRequest.service"
import {Observer} from "rxjs";
import {GlobalConst} from "../globalconst";
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import {  ConfirmationService} from '@jaspero/ng2-confirmations';
import { WindowRef } from './../window.ref';
@Component({
  selector: 'app-filemng',
  templateUrl: './filemng.component.html',
  styleUrls: ['./filemng.component.css']
})
export class FilemngComponent implements OnInit {
  searchModel={allChecked:Boolean,searchString:String};
  filelist:Array<any> = [];
  thumnailUrlRoot:string;
  socket ;
  connections:Array<any> =[];
  window;
  constructor(public apirequestService:ApiRequestService ,private _confirmation: ConfirmationService,private angularWindow:WindowRef) {
    apirequestService.setbaseApiPath = GlobalConst.NODEAPI_ENDPOINT;
    this.thumnailUrlRoot = GlobalConst.NODEAPI_ENDPOINT;
    this.socket = io(GlobalConst.NODE_ENDPOINT);
    this.window = angularWindow.nativeWindow;

    //this.searchModel.searchString='';

  }

  getMsgs(file_id) {
    console.log("socket listening"+file_id)
    let obsable = new Observable(observer => {

      this.socket.on('new-prog-msg'+file_id, (data) => {
        observer.next(data);
      });

      return () => {
        console.log("socket disconnect")
        this.socket.disconnect();
      }
    })
    return obsable;
  }

  filelistObserver:Observer<any>= {
    next: (datas )=>{
      this.filelist = JSON.parse(datas._body);
      console.log(this.filelist);
      var cnt = 0;
     // console.log(this.window.appCallByJs.doAndroidToast);





      //this.window.appCallByJs.doAndroidToast('test');



      this.filelist.forEach(item=>{

        if(item.encodests =='P'){
          cnt = cnt + 1;
          console.log(cnt)
          console.log(item)
          //if(cnt<2){
          var connection = this.getMsgs(item._id).subscribe(percentage => {
              console.log(percentage );
              item.progress =percentage.toString();

            });
          this.connections.push(connection);

         // }
          /**/
        }

      })


    } //(this.filelist = datas)
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }

  fileremoveObserver:Observer<any>=     {
    next: (datas )=>{
      let file_id = JSON.parse(datas._body);
      this.removeItem(file_id)
    } //(this.filelist = datas)
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }

  fileaddObserver:Observer<any>=     {
    next: (blob )=>{

    } //(this.filelist = datas)
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }


  filedownloadObserver:Observer<any>=     {
    next: (datas )=>{
      console.log(JSON.parse(datas._body).filepath);
      var fileitem = JSON.parse(datas._body);
      var name = fileitem.originalname +".mp4";

      if (name && name !=='') {

        var link = document.createElement("a");
        //link.href = GlobalConst.NODEAPI_ENDPOINT+"/videos/"+ fileitem.filepath;
        link.href = GlobalConst.NODEAPI_ENDPOINT+"/fileDownload/"+ fileitem._id+"?token="+fileitem.token;
        link.target = "_blank"
        link.download = name;
        console.log(link.href);
        link.click();

        //link.click();
      }

    } //(this.filelist = datas)
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }


  removeItem(file_id){
    const index: number = this.filelist.findIndex(function(item){
      return item._id ===file_id
    })

    if (index !== -1) {
      this.filelist.splice(index, 1);
      console.log("file remove compleit");
    }
  }


  removefile(fileitem){
    var conset:ConfirmSettings = {
      overlay: false,
      overlayClickToClose: true,
      showCloseButton: false
      }



    this._confirmation.create('Delete?', 'You should really just do it.',conset)
      // The confirmation returns an Observable Subject which will notify you about the outcome
      .subscribe((ans: ResolveEmit) =>{
        if(ans.resolved){
          this.apirequestService.delete("/fileUpload/"+fileitem._id).subscribe(
            this.fileremoveObserver
          )
        }
      })
  }

  downlloadfile(fileitem){
  console.log(this.thumnailUrlRoot+"/videos/"+fileitem.filepath);
    this.apirequestService.get("/fileCheck/"+fileitem._id).subscribe(
    //  this.apirequestService.getPreCheck("/videos/"+fileitem.filepath).subscribe(
     this.filedownloadObserver
    )
  }

  downlloadfiles(){
    var checkList = this.filelist.filter((fileItem: any)=>{
      return fileItem.checked==true;
    });

    checkList.forEach(fileItem=>{
        this.downlloadfile(fileItem);
      }
    )
  }

  checkAll(allChecked:Boolean){
    console.log(allChecked);
    this.filelist.forEach((fileItem) => {
      fileItem.checked = allChecked;
    });
  }
  search(){
    this.apirequestService.request("/fileList",this.searchModel).subscribe(
      this.filelistObserver
    );
  }


  encodefile(fileitem){
    this.apirequestService.request("/encodeVideo/",fileitem).subscribe(
      this.fileaddObserver
    )

  }

  ngOnInit() {
    console.log("test ngOninit");
    this.apirequestService.request("/fileList",this.searchModel).subscribe(
      this.filelistObserver
    )


  }
  ngOnDestroy() {
    this.connections.forEach(connection=>{
      connection.unsubscribe();
      }
    )
  }

}




export interface ResolveEmit {
  // Returns this if modal resolved with yes or no
  resolved?: boolean;
  // If the modal was closed in some other way this is removed
  closedWithOutResolving?: string;
}

export interface ConfirmSettings {
  overlay?: boolean; // Default: true
  overlayClickToClose?: boolean; // Default: true
  showCloseButton?: boolean; // Default: true
  confirmText?: string; // Default: 'Yes'
  declineText?: string; // Default: 'No'
}
