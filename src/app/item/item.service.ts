/**
 * Created by jcompia on 2017-11-29.
 */
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Item } from './item';

@Injectable()
export class ItemService {

  public $visible = new Subject<Item>();

  constructor() { }

}
