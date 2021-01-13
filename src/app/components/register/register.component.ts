import { Component, OnInit } from '@angular/core';
import { ChatappService } from 'src/app/service/chatapp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

data=
{
  username:"",
  password:"",
  email:"",
  city:""
}

  constructor(private register:ChatappService) { }

  ngOnInit(): void {
  }

  doSubmitForm()
  {
    console.log("Form is summited");
    console.log("DATA ",this.data);
    if(this.data.username=='' || this.data.password==''||this.data.email==''||this.data.city=='')
    this.register.sendData(this.data).subscribe(
      Response=> {
      console.log(Response);
      },
      error=>
      {
      console.log(error);
      }
    )
  }


}
