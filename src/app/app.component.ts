import { Component } from '@angular/core';
import {ChatappService} from './service/chatapp.service'
import {chatusers} from './classes/chatusers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'chatapp';
  constructor(private _chatService:ChatappService)
  {

  }

  lstchatuser:chatusers[];


  ngOninit()
  {
    this._chatService.getchatusers().subscribe(
    data=>
    {
      this.lstchatuser=data;
    }
    );
  }
}
