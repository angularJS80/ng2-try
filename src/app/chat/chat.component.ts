import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  username:string='';
  msg={date :new Date()};
  connection ;
  msgs:any[] ;
  constructor(
    public chatService:ChatService
  ) {
    console.log("constructor");
  }
  ngOnInit() {
    this.msgs = [];

    this.connection = this.chatService.getMsgs().subscribe(msg => {
      console.log(this.msgs);
      this.msgs.push(msg);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
  sendmsg() {
    console.log(this.msgs);
    this.msg.date = new Date();
    this.chatService.sendMsg(this.msg);
    console.log('ionViewDidLoad ChatPage');
  }
}
