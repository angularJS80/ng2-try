
import { Component, OnInit } from '@angular/core';
import {FileItem} from "ng2-file-upload";
import {ApiRequestService} from "../_services/apiRequest.service";
import {Observer} from "rxjs";
import { Observable } from 'rxjs/Observable';
import {GlobalConst} from "../globalconst";
import * as io from 'socket.io-client';


class UrlItem{

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
  progress:String="0";
  name:String="";
  utburl:String="";
  size:Number=0;
  apirequestService:ApiRequestService;

  urluploadObserver:Observer<any>= {
    next: (datas)=>(console.log(datas))
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }

  createFileIdObserver:Observer<any>= {
    next: (datas)=>{
      console.log(datas._body);


      var file_id = JSON.parse(datas._body)._id;

      this.getMsgs(file_id).subscribe(percentage => {
        console.log(percentage );
        this.progress =percentage.toString();

      });

      this.apirequestService.request('/utbupload',{utburl:this.utburl,file_id:file_id}).subscribe(this.urluploadObserver);
    }
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }
  /*
  sendMsg(msg) {
    this.socket.emit('add-msg', msg);
    console.log("msg SENT");
  }*/

  upload(){
    this.apirequestService.get('/createFileId').subscribe(
      this.createFileIdObserver
    );


   }
  apiUrl:String=GlobalConst.NODE_ENDPOINT;
}

class UtbUrlUploader {
  url:string;
  isUploading: boolean;
  queue: any[];
  progress: number;
  apirequestService:ApiRequestService;
  uploadAdd(): void{
    let urlItem = new UrlItem();
    urlItem.apirequestService = this.apirequestService;

    console.log(urlItem);
    console.log(this.url);
    this.queue.push(urlItem);

  };

  getNotUploadedItems():any[]{
    return this.queue;
  };

  constructor(){
    this.queue = [];
  }
  uploadAll(){
    this.queue.forEach(item=>{
      item.upload();
    });
  }
  cancelAll(){

  }
  clearQueue(){

  }
}

@Component({
  selector: 'app-utbattach',
  templateUrl: './utbattach.component.html',
  styleUrls: ['./utbattach.component.css']
})
export class UtbattachComponent  implements OnInit {
  uploader:UtbUrlUploader;
  constructor(public apirequestService:ApiRequestService) {
    apirequestService.setbaseApiPath = GlobalConst.NODEAPI_ENDPOINT;
    this.uploader = new UtbUrlUploader();
    this.uploader.url = GlobalConst.NODEAPI_ENDPOINT + "/utbupload"
    this.uploader.apirequestService = apirequestService;

  };

  ngOnInit() {

  }
}
