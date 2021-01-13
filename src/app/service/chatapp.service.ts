import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ChatappService {

constructor(private httpclient:HttpClient){}

getchatusers():Observable<any>
{
return this.httpclient.get("http://localhost:8080/ChatApp/alluser");
}

 
}
