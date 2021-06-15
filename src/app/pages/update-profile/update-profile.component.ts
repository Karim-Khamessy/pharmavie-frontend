import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  verify() {
   
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var bttn=document.getElementById('update');
    var status=document.getElementById('message');

    function validatePassword(){

      if(password == confirm_password)
      {
        bttn.removeAttribute("disabled");
        status.style.color = 'green';
        status.innerHTML = 'matching';

      } else{
        status.style.color = 'red';
        status.innerHTML = 'not matching';
        bttn.setAttribute("disabled", "disabled");
      }
      
    }
  
    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
    
  }

}
