import {Component, OnInit, Optional, Host} from '@angular/core';
import {Item} from "../item/item";
import {Subject, BehaviorSubject, Observable, Observer} from "rxjs";


//class HostService {}
@Component({
  selector: 'app-list',
  //viewProviders: [HostService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  ngOnInit() {
    console.log(this.list.length);
  }
  obsableTest_buttonEventTarget;
  createEventObservable = Observable
    .create(
      //this.obsableTest_buttonEventTarget.onClick(
      (obs)=>{ //자동으로 아래 실행된다.
        obs.next('create auto sumVaule');
      }
      //)
    );
    /*.subscribe(
      this.btn_clickObserver
    );*/
  form_EventObservable=
  Observable
    .fromEvent(this.obsableTest_buttonEventTarget, 'click') // 지정된 타겟 이벤트에 클릭이 발생되었다면 ?
  txt_OnKeyUpObserable;

  intervvalEventObservable:any
  btn_ReduauceEventObserable = Observable//.fromEvent(event.target, 'click') // 지정된 타겟 이벤트에 클릭이 발생되었다면 ?
  .of(1,2,3,4,5)
  .reduce((total,current)=>{return total+current},0)

  /*.subscribe(
    //(event)=>(console.log('keyboard'))
    this.btn_clickObserver
  );*/

  btn_ScanEventObserable = Observable//.fromEvent(event.target, 'click') // 지정된 타겟 이벤트에 클릭이 발생되었다면 ?
  .of(1,2,3,4,5)
  .scan((total,current)=>{return total+current},0);
  /*.subscribe(
    //(event)=>(console.log('keyboard'))
    this.btn_clickObserver
  );*/




  btn_clickObserver:Observer<any>= {
    next: (value)=>("im btn logger"+console.log(value))
    ,error:(error)=>(console.log(error))
    ,complete:()=>(
      console.log('complete')
      )

  }

  logObserver:Observer<any>= {
    next: (value)=>(console.log(value))
    ,error:(error)=>(console.log(error))
    ,complete:()=>(console.log('complete'))
  }



  constructor(//@Optional() @Host() hs: HostService
  ) {
  }

  list: Item[]= [
    {
      title: 'Item 1',
      description: 'Description 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      isVisible:false
    },
    {
      title: 'Item 2',
      description: 'Description 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      isVisible:false
    },
    {
      title: 'Item 3',
      description: 'Description 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      isVisible:false
    }
  ];
  re;
  subject:Subject<number> = new Subject<number>(); // Obsable 가능한 서브젝트 생성

  private _ex1: number = 0
  set ex1(val) { this._ex1 = val; this.ex1Re = val*10 }
  get ex1() { return this._ex1 }

  ex1Re: number = 0

  // ex2 ( RxJS )

  ex2St: any = new BehaviorSubject(0)
  set ex2(val) { this.ex2St.next(val) }
  get ex2() { return this.ex2St.value }

  ex2Re: number = 0

  ObsavleTest(event){
    // 2 클릭이벤트에서 옵저버의 next 를 강제로 실행.
    this.btn_clickObserver.next("sumValue");


    if(this.obsableTest_buttonEventTarget==null){ // 버튼 이벤트에 대한 타겟이 없다면
      console.log("first click and add click event lisener")
      this.obsableTest_buttonEventTarget = event.target; //타겟을 지정해준다. 여기까진 돔에 접근하여 타겟 이벤트를 받아 오기 싫어서 엥귤러에서 버튼 클릭시 이벤트를 넘기게 하였다. 그리고 클릭시 타겟만 지정한다.
      // 타겟에 대한 이벤트 설정은 바로 위에 정의되어있다.

      // 1 옵저버블은 폼이벤트 데이터를 제공한다. 제공된 데이터를 subscribe 에 구독자를 묶는다.
      // 3 옵저저블이 데이터를 제공할때 옵저버의 정의된 넥스트를 수행시킨다.

      this.form_EventObservable.subscribe(
        //(event)=>(console.log('btn clicked'))
        this.btn_clickObserver
      );
    }

  }

  observerbleOnKeyUp(event){
    if(this.txt_OnKeyUpObserable==null){
      this.txt_OnKeyUpObserable = Observable.fromEvent(event.target, 'keyup') // 지정된 타겟 이벤트에 클릭이 발생되었다면 ?

        .pluck('targt','value')
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe(
          //(event)=>(console.log('keyboard'))
          this.btn_clickObserver
        );
    }
  }

  observerbleReduce(){

    this.btn_ReduauceEventObserable
      .subscribe(
        //(event)=>(console.log('keyboard'))
        this.btn_clickObserver
      );

  }

  observerbleScan(){
    this.btn_ScanEventObserable.subscribe(
      //(event)=>(console.log('keyboard'))
      this.btn_clickObserver
    );
  }

  // 2 옵저블에 크레이트로 데이터 발생시 옵저버의 next 가 수행된다.
  observerbleCreateTest(){
    this.createEventObservable.subscribe(this.btn_clickObserver);
  }
  // 2 옵저블에 인터벌로 데이터 발생시 옵저버의 next 가 수행된다.
  observerbleIntercalTest(){
    // 구독을 취소 시키기 위해 변수를 갱신해야 한다.
    this.intervvalEventObservable =
      Observable
        .interval(
          1000 // 1초마다 수행되고
        )
        .map(
          (value)=>{
            return value*2; // 두배로 가공하여
          }
        )
        .throttleTime(2000) // 2초에 한번 구독시킨다
        .filter(
          (value)=>{
            console.log(value);
            return value%3==0; // 필터로 3으로 나눈 나머지가 0일때 만 베터 낸다
          }).subscribe(
      this.btn_clickObserver
    )
  }

  observerbleIntercalTestStop(){
    this.intervvalEventObservable.unsubscribe();
    //this.intervvalEventObservable = null;
    //this.btn_clickObserver;
  }

  addSubscribe() {
    this.subject
    .subscribe(
      this.btn_clickObserver
    );
  }

  observeTest(){
    this.addSubscribe();
    setInterval( () => this.subject.next( (new Date).getSeconds() ), 1000 ); // 데이터 스트림을 생산시킨다. 1초마다 옵저버블의 next 메소드를 통해
  }

  stopAllsubscribe(){
    this.subject.unsubscribe(); // 중지이후 인터벌로 next 가 호출됨으로 빈 Subject 를 다시 생성해주는데 그 초기화 방법을 몰라서...
    //this.subject.complete();
    this.subject = new Subject<number>();
  }

  changeValStatus(){
// ex1
    console.log('----- ex1 start -----')

    this.ex1 = 1
    console.log(this.ex1, this.ex1Re)
    this.ex1 = 2
    console.log(this.ex1, this.ex1Re)
    // ex2
    console.log('----- ex2 start-----')
    this.ex2St
      .do(_=>this.ex2Re = _*10)
      .subscribe(d => console.log(d, this.ex2, this.ex2Re))// 구독기능을 중복적으로 추가  가능하다??
      //.subscribe(d => console.log("###"+d, this.ex2, this.ex2Re))// 구독기능을 중복적으로 추가  가능하다?? 오류난다

    this.ex2St
      //.do(_=>this.ex2Re = _*10)
      .subscribe(d => console.log("##############"+d, this.ex2, this.ex2Re))// 구독이후 다른기능을 만들면?

    this.ex2 = 1 // 셋터 함수에서 값으로 넥스트 해주고 로그 찍는다.
    this.ex2 = 2// 셋터 함수에서 값으로 넥스트 해주고 로그 찍는다.
    this.ex2 = 0// 셋터 함수에서 값으로 넥스트 해주고 로그 찍는다.
  }
}
