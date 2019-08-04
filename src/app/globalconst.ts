/**
 * Created by jcompia on 2018-01-25.
 */
import {environment} from "../environments/environment";
import {DynamicScriptLoaderService} from "./_services/dynamicCdnJs.service";
import {OnInit} from "@angular/core";
import * as env from "assets/js/importEnv.js"
export class GlobalConst {
  private static dynamicScriptLoader: DynamicScriptLoaderService = new DynamicScriptLoaderService();
  //private static apiUrl:string;


  public static get HEROAPI_ENDPOINT(): string {
    return  environment.apiUrl+'/hero';
  }

  public static get NODEAPI_ENDPOINT(): string {
    return environment.apiUrl+'/api';
  }

  public static get NODE_ENDPOINT(): string {
    this.dynamicScriptLoader.load('env').then(data => {
      environment.apiUrl = env.getApiUrl();
      console.log(env.getApiUrl());
    }).catch(error => console.log(error));
    return environment.apiUrl;
  }

  /*
  public static get HEROAPI_ENDPOINT(): string { return 'http://52.194.130.175:58080/hero'; }
  public static get NODEAPI_ENDPOINT(): string { return 'http://localhost:38080/api'; }
  public static get NODE_ENDPOINT(): string { return 'http://localhost:38080'; }
   */
}
