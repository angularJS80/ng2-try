import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database-deprecated";

@Component({
  selector: 'app-runstate',
  templateUrl: './runstate.component.html',
  styleUrls: ['./runstate.component.css']
})
export class RunstateComponent implements OnInit {
   currentStepVal:number = 0;
   clearStepVal:number = 100;
   currentModVal:number = 0;
   index = 0;
   s:any;
  constructor(private db:AngularFireDatabase) { }
  ngOnInit() {
    this.getChatDataLoad();
  }
  getChatDataLoad(){
    this.s = this.db.list('/bleLog').subscribe(
      data=>{
        this.index++
        console.log()
        this.currentStepVal = data[data.length-1].value;//this.index;
        this.currentModVal = Number(this.currentStepVal % this.clearStepVal);


      }

    );
  }

}
