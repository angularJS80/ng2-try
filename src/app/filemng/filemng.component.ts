import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../_services/apiRequest.service";
import {Observer} from "rxjs";
import {GlobalConst} from "../globalconst";

@Component({
  selector: 'app-filemng',
  templateUrl: './filemng.component.html',
  styleUrls: ['./filemng.component.css']
})
export class FilemngComponent implements OnInit {
  filelist = [];
  thumnailUrlRoot:string;



  constructor(public apirequestService:ApiRequestService) {
    apirequestService.setbaseApiPath = GlobalConst.NODEAPI_ENDPOINT;
    this.thumnailUrlRoot = GlobalConst.NODEAPI_ENDPOINT;
  }

  filelistObserver:Observer<any>= {
    next: (datas )=>{
      this.filelist = JSON.parse(datas._body);
      console.log(this.filelist);

    } //(this.filelist = datas)

    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }

  ngOnInit() {
    console.log("test ngOninit");
    this.apirequestService.get("fileList").subscribe(
      this.filelistObserver
    )
  }

}
