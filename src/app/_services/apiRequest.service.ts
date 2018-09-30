/**
 * Refby GitHub
 * Modify by cho.yong-beom on 2017-11-18.
 */
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams,RequestMethod } from '@angular/http';
import { Router } from '@angular/router';
//import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Observable} from 'rxjs/Observable';
import {Observer} from "rxjs";

import {GlobalConst} from "../globalconst";
@Injectable()
export class ApiRequestService {

  private baseApiPath:string = "";

  requestObserver:Observer<any>=     {
    next: (datas )=>{


    }
    ,error:(error)=>{
      console.log("api request error : "+error)
      if (error.status === 401){


        this.router.navigate(['/logout']);
      }

      if (error.status === 403){

      }


    }
    ,complete:()=>(console.log("api request complete"))
  }

  public set setbaseApiPath(apiPath:string) {
    this.baseApiPath = apiPath;
  }

  constructor(
    private http: Http,
    //private userInfoService:UserInfoService,
    private router:Router,
  ) { }

  appendAuthHeader():Headers {
    console.log("setting auth header")
    let headers = new Headers({'Content-Type': 'application/json'});
  //  let token = this.userInfoService.getStoredToken();
    let token:string =null;
    if(JSON.parse(localStorage.getItem('currentUser'))){
        token = JSON.parse(localStorage.getItem('currentUser')).token;
    }

    if (token !==null) {
      headers.append("Authorization", token);
    }
    return headers;
  }

  refreshToken(observer:Observer<any>,url:string, body:Object){
    this.setbaseApiPath = GlobalConst.NODE_ENDPOINT;
    let requestOptions = this.getRequestOptions(RequestMethod.Post, '/openapi/refreshToken', undefined, {test:"test"});
    console.log(requestOptions);
    this.setbaseApiPath = GlobalConst.NODEAPI_ENDPOINT;
    this.http.request(new Request(requestOptions))
      .map(data=> {
        let user = data.json();

         if (user && user.token) {
         // store user details and jwt token in local storage to keep user logged in between page refreshes
         localStorage.setItem('currentUser', JSON.stringify(user));
          //this.requestNew(url,body,observer);
         }else{
          this.router.navigate(['/login']);
         }

        return data;
      }).subscribe(this.requestObserver);


  }

  getRequestOptions(requestMethod, url:string, urlParam?:URLSearchParams, body?:Object):RequestOptions {
    let options = new RequestOptions({
      headers: this.appendAuthHeader(),
      method : requestMethod,
      url    : this.baseApiPath + url
    });
    if (urlParam){
      options = options.merge({ params: urlParam});
    }
    if (body){
      options = options.merge({body: JSON.stringify(body)});
    }
    return options;
  }

  get(url:string, urlParams?:URLSearchParams):Observable<any>{
    let requestOptions = this.getRequestOptions(RequestMethod.Get, url, urlParams);
    console.log(requestOptions);
    let rtnObsable = this.http.request(new Request(requestOptions))
      .map(data=> {
        this.requestObserver.next(data);
        return data;
      });
    return rtnObsable
  }


  /*getBinary(url:string, urlParams?:URLSearchParams):Observable<any>{

    let headers = new Headers({'Content-Type': 'binary/octet-stream'});
    let token:string =null;
    if(JSON.parse(localStorage.getItem('currentUser'))){
      token = JSON.parse(localStorage.getItem('currentUser')).token;
    }

    if (token !==null) {
      headers.append("Authorization", token);
    }

    let requestOptions = this.getRequestOptions(RequestMethod.Get, url, undefined, urlParams);
    requestOptions.headers = headers;
    let requestUrl = this.baseApiPath+url;
    /!*let bservable: Observable<Response> = Observable.create(function (observer:Observer<any>) {
      let formData: any = new FormData();
      let imgArr = "avatar";
      let xhr = new XMLHttpRequest();
      //formData.append(imgArr, avatarFile, avatarFile.name);

      xhr.open("GET", requestUrl, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState==2 && xhr.status == 200) {
          observer.next(xhr.response);p
          //observer.completed();
        } else {
          //observer.error(xhr.response);
        }
        /!*if (xhr.readyState == 4) {
        }*!/
      };


      let token:string =null;
      if(JSON.parse(localStorage.getItem('currentUser'))){
        token = JSON.parse(localStorage.getItem('currentUser')).token;
      }

      if (token !==null) {
        xhr.setRequestHeader('Authorization', token);
      }
      xhr.responseType = "blob";
      xhr.send(formData);
    });*!/

    let requestOptions = this.getRequestOptions(RequestMethod.Get, url, urlParams);
    //requestOptions.responseType = 2;
    let innerHttp = this.http;

    /!*innerHttp.get(url,requestOptions)
      .map((res: Response) => {

        if (res) {

          if (res.status === 201) {
            return [{ status: res.status, json: res }]
          }
          else if (res.status === 200) {
            alert("test2");
            var blob = new Blob([res._body], { type: 'text/bin' });
            var link=document.createElement('a');
            link.href=window.URL.createObjectURL(blob);
            link.download="any name + extension";
            link.click();

          }
        }
      })

      .toPromise()

      .then(result=>{
        alert("test");
          var blob = new Blob([result._body], { type: 'text/plain' })
          var link=document.createElement('a');
          link.href=window.URL.createObjectURL(blob);
          link.download="any name + extension";
          link.click();

        }
      )
      .catch(
        //observer.next(this.handleError)
      );
*!/
    let observable: Observable<Response> = Observable.create(function (observer:Observer<any>) {
      innerHttp.get(url,requestOptions)
        .toPromise()
        .then(result=>{
          alert("test2");
          var blob = new Blob([result._body], { type: 'text/bin' });
          var link=document.createElement('a');
          link.href=window.URL.createObjectURL(blob);
          link.download="any name + extension";
          link.click();
           observer.next(result)
          }
        )
        .catch(
          observer.next(this.handleError)
        );
    }

    return observable = this.http.request(url,requestOptions)
      .map(data=> {
        console.log(data);
       //this.requestObserver.next(data);
        return new Blob([data], { type: "application/octet-stream"} );
      });
  }*/

  request(url:string, body:Object):Observable<any>{
    let requestOptions = this.getRequestOptions(RequestMethod.Post, url, undefined, body);
    //console.log(this.http.request(this.baseApiPath+url,requestOptions));

    let rtnObsable = this.http.request(new Request(requestOptions))
      .map(data=> {
        this.requestObserver.next(data);
        // 위에서 재발급요청을 해도
        // 아래에 는 계속 진행됨으로 오류가 발생 중단하고 재발급 요청을 타도록 변경해야
        return data;
      });
    //rtnObsable.subscribe(this.requestObserver);
    return rtnObsable
  }

  requestNew(url:string, body:Object,observer:Observer<any>):void{
    let requestOptions = this.getRequestOptions(RequestMethod.Post, url, undefined, body);
    //console.log(this.http.request(this.baseApiPath+url,requestOptions));

    let rtnObsable ;
    console.log("cant add map");
    rtnObsable = this.http.request(new Request(requestOptions)).map(data=> {
      console.log("###################################rtnObsable")
      console.log(rtnObsable);

      this.authCheck(data,rtnObsable,observer,url, body);
        //this.requestObserver.next(data);
        // 위에서 재발급요청을 해도
        // 아래에 는 계속 진행됨으로 오류가 발생 중단하고 재발급 요청을 타도록 변경해야
        return data;
      });
    rtnObsable.subscribe(this.requestObserver);
  }

  authCheck(data:Object,observale:Observable<any>,observer:Observer<any>,url:string, body:Object){
    console.log("authCheck######################");
    console.log(data)
    console.log("api request : datas"+JSON.parse(data["_body"]))
    console.log(JSON.parse(data["_body"]).error.status );
    if(JSON.parse(data["_body"]).error && JSON.parse(data["_body"]).error.status ==403){
      console.log("api request error : ")
      console.log(JSON.parse(data["_body"]).error)
      this.refreshToken(observer,url, body);
    }else{
      observale.subscribe(observer);
    }
  }

  put(url:string, body:Object):Observable<any>{
    let requestOptions = this.getRequestOptions(RequestMethod.Put, url, undefined, body);
    let rtnObsable = this.http.request(new Request(requestOptions))
    rtnObsable.subscribe(
      this.requestObserver
    );
    return rtnObsable;
   }

  delete(url:string):Observable<any>{
    let requestOptions = this.getRequestOptions(RequestMethod.Delete, url);
    let rtnObsable = this.http.request(new Request(requestOptions))
    rtnObsable.subscribe(
      this.requestObserver
    );
    return rtnObsable;

  }
}
