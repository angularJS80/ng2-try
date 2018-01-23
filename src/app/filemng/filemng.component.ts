import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../_services/apiRequest.service";
import {Observer} from "rxjs";

@Component({
  selector: 'app-filemng',
  templateUrl: './filemng.component.html',
  styleUrls: ['./filemng.component.css']
})
export class FilemngComponent implements OnInit {
  filelist = [];
  constructor(public apirequestService:ApiRequestService) { }

  filelistObserver:Observer<any>= {
    next: (datas )=>(this.filelist = datas)
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }

  ngOnInit() {
    this.apirequestService.get("/fileList").subscribe(
      this.filelistObserver
    )
  }

}
