import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the TvfilmsearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TvfilmsearchProvider {
  apiKey = '24c3c449';
  url;



  constructor(public http: HttpClient) {
    console.log('Hello TvfilmsearchProvider Provider');
    this.url ='http://www.omdbapi.com/?apikey=' + this.apiKey + '&t=';
  }
  
  gettvfilmsearchprovider(filmortv:string){
    return this.http.get(this.url+ filmortv)
  }

}
