import { Injectable } from '@angular/core';
//import { ApiAiClient } from 'api-ai-javascript';
import { environment } from '../environments/environment';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
//import { Message } from '../app/models';

//Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class ChatService {
  readonly token = environment.dialogflow.angularBot;
  //readonly client = new ApiAiClient({ accessToken: this.token });
get baseUrl()
{
  return environment.baseURL;
}
get baseGetURL()
{
  return environment.baseGetURL;
}
get customerOrderURL()
{
  return environment.customerOrderURL;
}
  constructor(public http: Http) { }

    public getResponse(query: string){
      let data = { query : query, lang: 'en', sessionId: '12345'  }
      return this.http.post(this.baseUrl, data, {headers: this.getHeaders()})
        .map(res => {
          return res.json();
        })
      // return this.http.get(this.baseGetURL, {headers: this.getHeaders()})
      //   .map(res => {
      //     return res.json();
      //   })
    }
    public getHeaders(){
      let headers = new Headers();
      headers.append('Authorization', `Bearer ${this.token}`);
      return headers;
    }
    getCustomerOrder() {
      return this.http.get(this.customerOrderURL, {headers: this.getHeaders()})
      .map(res => {
        return res.json();
      })

    }
}
