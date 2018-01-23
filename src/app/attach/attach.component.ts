import { Component, OnInit } from '@angular/core';
import {FileUploader, FileItem} from "ng2-file-upload";
import {ApiRequestService} from "../_services/apiRequest.service";

@Component({
  selector: 'app-attach',
  templateUrl: './attach.component.html',
  styleUrls: ['./attach.component.css']
})
export class AttachComponent implements OnInit {
  apiurl:string = "http://localhost:38080/api/fileupload";
  uploader:FileUploader = new FileUploader({
    url:this.apiurl
  });
  completefilelist=[];
  cancelfilelist=[];

  constructor(public apirequestService:ApiRequestService) {
    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false;

      // 서버에 전송해야 함으로 오버라이드 개념으로 재정의 하고 기존에 호출하던 cancelItem 호출
      item.remove = () => { // 제거 시 서버단 삭제 여부 결정필요
        this.apirequestService.getRequestOptions("delete",this.apiurl+"/"+item.file["file_id"]);
        this.uploader.removeFromQueue(item);
        console.log(this.uploader.queue);
      };

      // 서버에 전송해야 함으로 오버라이드 개념으로 재정의 하고 기존에 호출하던 cancelItem 호출
      item.cancel = () => { // 업로드 도중 취소시 서버단 삭제 여부 결정필요
        this.apirequestService.getRequestOptions("delete",this.apiurl+"/"+item.file["file_id"]);
        this.uploader.cancelItem(item);
        console.log(this.uploader.queue);
      };
    });

    this.uploader.onCompleteItem = (item, response, status, headers)=>{
      item.file["file_id"] = JSON.parse(response)._id; // 완료된 파일id를 서버로 부터 리턴 받는다.
      this.completefilelist.push(response);
      console.log(response);
    }

    this.uploader.onCancelItem = (item, response, status, headers)=>{
      console.log("onCancelItem ");
      this.cancelfilelist.push(response);
      console.log(response);
    }

    this.uploader.onCompleteAll = () => { // 모든 파일이 업로드완료시 아래 queue 에 file_id 를 컨텐츠에 컨텐츠에 종속 시킨다.
      console.log('complete');
      console.log(this.uploader.queue);
    };
  };

  ngOnInit() {

  }
}
