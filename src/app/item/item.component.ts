import {Component, OnInit, OnDestroy, Input, Optional, Host} from '@angular/core';

import { Subscription } from "rxjs/Subscription";
import {Item} from "./item";
import {ItemService} from "./item.service";



@Component({
  selector: 'app-item', // 리스트컴포넌트의 템플릿에서 app-item 을 반복시킨다.
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  //viewProviders:[OtherService,HostService, ItemService]
})
export class ItemComponent implements OnInit, OnDestroy {

  @Input() item: Item; // 반복사킬때 Item 을 리스트 템플릿으로 부터 받는다.
  private itemSubscription: Subscription;
  constructor( private itemService: ItemService

  ) { }

  ngOnInit() {

    this.itemSubscription = this.itemService.$visible.subscribe((item: Item) => {
      this.item.isVisible = item.title === this.item.title;
    })
  }

  ngOnDestroy() {
    if (this.itemSubscription) {
      this.itemSubscription.unsubscribe();
    }
  }

  toggle() {
    /*console.log(this.hs);
    this.hs.testprint();
    this.os.testprint();
    */this.itemService.$visible.next(this.item);
  }
}
