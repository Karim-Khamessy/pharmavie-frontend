import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private errorMessage ="" ; 

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }
onSubmit(form : any){
  console.log(form) ; 
  this.userService.signUp(form).subscribe((response: any) => {

    const token = response.accessToken ; 
    localStorage.setItem('pharmavie_token', token) ; 
    this.router.navigate(['landingPage']) ; 
  }, (error)=>{
    this.errorMessage = error ; 
    console.log(this.errorMessage) ; 
  }) ; 
}
}
