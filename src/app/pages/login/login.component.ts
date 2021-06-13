import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  closeResult ='' ; 
  messageError ="" ; 

  constructor(private modalService : NgbModal ,
             private userService : UserService, 
             private route : Router) { 
  }

  ngOnInit(): void {
  }


  open(content: any) {
    this.modalService.open(content, { size :'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  login(value: any){
    console.log(value) ; 
    this.userService.login(value).subscribe((response )=>{
      let token = response.accessToken; 
      localStorage.setItem("pharmavie_token",token) ; 
      this.route.navigate(["landingPage"]) ; 
    },(error)=>{
      console.log(error) ; 
      this.messageError = error ; 
    }) ; 
  }

}
