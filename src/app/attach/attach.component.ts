import { Component, OnInit } from '@angular/core';
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-attach',
  templateUrl: './attach.component.html',
  styleUrls: ['./attach.component.css']
})
export class AttachComponent implements OnInit {
  uploader:FileUploader = new FileUploader({
    url:"http://localhost:38080/api/fileupload"
  });
  constructor() {
    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false;
    });

    this.uploader.onCompleteItem = (item, response, status, headers)=>{
      console.log(response);
    }
  }

  ngOnInit() {
  }

}
