import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorageService {
    constructor(private http: Http) { }

    getLinkData(link) {
    return this.http.get(link)    
    .map(
        (response: Response) => {
          const data = response.json();          
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
}