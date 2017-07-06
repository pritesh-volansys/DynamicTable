import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class HttpCallService {
  responseMessage = new Subject<string>();
  ReqestOption;
  constructor(private http: Http) { }

  getLinkData(httpReqestOption) {
    this.ReqestOption = httpReqestOption;
    const headers = new Headers({ 'Content-Type': httpReqestOption.ContentType })
    return this.http.get(httpReqestOption.Url)
    .map(
        (response: Response) => {
          if (response.statusText.toUpperCase() === 'OK') {
            const data = response.json();
            this.responseMessage.next(response.statusText);
            return data;
          }
        })
      .catch((error: Response) => {
        console.log(error);
          this.responseMessage.next(error.statusText);
          return Observable.throw(error.statusText);
        });
  }

  StoreData(dataSet) {
     return this.http.put(this.ReqestOption.Url, dataSet);
  }
}
