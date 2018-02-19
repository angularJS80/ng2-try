import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../_services/apiRequest.service";
import {Observer} from "rxjs";
import {GlobalConst} from "../globalconst";
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-filemng',
  templateUrl: './filemng.component.html',
  styleUrls: ['./filemng.component.css']
})
export class FilemngComponent implements OnInit {
  filelist:Array<any> = [];
  thumnailUrlRoot:string;

  constructor(public apirequestService:ApiRequestService ) {
    apirequestService.setbaseApiPath = GlobalConst.NODEAPI_ENDPOINT;
    this.thumnailUrlRoot = GlobalConst.NODEAPI_ENDPOINT;
  }

  getMsgs(file_id) {
    let obsable = new Observable(observer => {
      var socket = io(GlobalConst.NODE_ENDPOINT);
      socket.on('new-prog-msg'+file_id, (data) => {
        observer.next(data);
      });

      return () => {
        socket.disconnect();
      }
    })
    return obsable;
  }

  filelistObserver:Observer<any>= {
    next: (datas )=>{
      this.filelist = JSON.parse(datas._body);
      console.log(this.filelist);
      this.filelist.forEach(item=>{
        console.log(item)
        this.getMsgs(item._id).subscribe(percentage => {
          console.log(percentage );
          item.progress =percentage.toString();

        });
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
    this.apirequestService.delete("/fileUpload/"+fileitem._id).subscribe(
      this.fileremoveObserver
    )
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

}
