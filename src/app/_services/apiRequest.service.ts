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

@Injectable()
export class ApiRequestService {

  private baseApiPath:string = "";

  requestObserver:Observer<any>=     {
    next: (datas )=>{
      console.log("api request : datas"+datas)
    }
    ,error:(error)=>{
      console.log("api request error : "+error)
      if (error.status === 401){
        this.router.navigate(['/logout']);
      }

      if (error.status === 403){
        this.router.navigate(['/login']);
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


  getBinary(url:string, urlParams?:URLSearchParams):Observable<any>{
    let requestOptions = this.getRequestOptions(RequestMethod.Get, url, urlParams);
    requestOptions.responseType = 3;

    let rtnObsable = this.http.request(new Request(requestOptions))
      .map(data=> {
        this.requestObserver.next(data);
        return data;
      });
    return rtnObsable
  }

  request(url:string, body:Object):Observable<any>{
    let requestOptions = this.getRequestOptions(RequestMethod.Post, url, undefined, body);
    //console.log(this.http.request(this.baseApiPath+url,requestOptions));

    let rtnObsable = this.http.request(new Request(requestOptions))
      .map(data=> {
        this.requestObserver.next(data);
        return data;
      });
    return rtnObsable
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
