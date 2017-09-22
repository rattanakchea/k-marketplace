import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestMethod, Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  private request(url: string, method: RequestMethod, body?: Object) {
    const headers = new Headers();
    const requestOptions = new RequestOptions({
      url: '/api' + url,
      method: method,
      headers: headers
    });
    if (body) {
      requestOptions.body = body;
    }
    const request = new Request(requestOptions);
    return this.http.request(request)
      .map((res: Response) => {
        console.warn(res);
        return res.json();
      })
      .catch(this.handleError);
  }

  get(url: string) {
    return this.request(url, RequestMethod.Get);
  }
  
  // ======= Private Helper functions ======
  private handleError(err: any): Observable<string> {
    let errMessage: string;
    if (err && err.status && err.status === 401) {
      alert('Your session has expired. Please log in again.');
      localStorage.removeItem('token');
      window.location.href = '/home/signin';
    }
    if (err instanceof Response) {
      const body = err.json() || '';
      if (body.message) {
        return Observable.throw(body.message);
      }
      const error = body.error || body;
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
      return Observable.throw(errMessage);
    } else {
      errMessage = err.message ? err.message : err.toString();
      return Observable.throw(errMessage);
    }
  }
}
