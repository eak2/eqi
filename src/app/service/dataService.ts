import { Http, ResponseContentType, RequestMethod, Response, Request, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

    public _baseUri: string;
       constructor(public http: Http) {
    }
    set(baseUri: string): void {
        this._baseUri = "http://equityinsightapi.azurewebsites.net/api/" + baseUri;
    }
    getCIKandName(key: string){
        this.set("names/");
        var uri = this._baseUri + key;
        var options = new JsonRequestOptions();
        return this.http.get(uri, options)
            .map(response => (<any>response));
    }
}

class JsonRequestOptions extends RequestOptions {

    authToken: string;
    headers: Headers;

     constructor(authToken: string = null)
     {
         super();

        this.headers = new Headers();

         if(authToken)
         {
             //this.headers.append('Farg', authToken);
         }

         let TAuth: string = localStorage.getItem('token')
         let User: string = localStorage.getItem('user')

         this.headers.append('Content-Type', 'application/json');

         if(TAuth)
         {
            this.headers.append('TAuth', JSON.stringify(TAuth));
            this.headers.append('User', User); 

            console.log(JSON.stringify(this.headers));
         }
         	
        this.headers.append('Access-Control-Allow-Origin', '*');
     }
}