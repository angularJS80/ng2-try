import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../_services/apiRequest.service";
import {Observer} from "rxjs";
import {GlobalConst} from "../globalconst";
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

import {  ConfirmationService} from '@jaspero/ng2-confirmations';

@Component({
  selector: 'app-filemng',
  templateUrl: './filemng.component.html',
  styleUrls: ['./filemng.component.css']
})
export class FilemngComponent implements OnInit {
  filelist:Array<any> = [];
  thumnailUrlRoot:string;
  socket ;
  connections:Array<any> =[];
  constructor(public apirequestService:ApiRequestService ,private _confirmation: ConfirmationService) {
    apirequestService.setbaseApiPath = GlobalConst.NODEAPI_ENDPOINT;
    this.thumnailUrlRoot = GlobalConst.NODEAPI_ENDPOINT;
    this.socket = io(GlobalConst.NODE_ENDPOINT);
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
      this.filelist.forEach(item=>{

        if(item.encodests =='P'){
          cnt = cnt + 1;
          console.log(cnt)
          console.log(item)
          //if(cnt<2){
          this.connections[cnt] = this.getMsgs(item._id).subscribe(percentage => {
              console.log(percentage );
              item.progress =percentage.toString();

            });
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
    next: (datas )=>{
      var item = JSON.parse(datas._body)
      console.log(item)
      this.filelist.push(item);
      item.progress = "0";
      this.getMsgs(item._id).subscribe(percentage => {
        console.log(percentage );
        item.progress =percentage.toString();
      });

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


  encodefile(fileitem){

    this.apirequestService.request("/encodeVideo/",fileitem).subscribe(
      this.fileaddObserver
    )

  }

  ngOnInit() {
    console.log("test ngOninit");
    this.apirequestService.get("/fileList").subscribe(
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
