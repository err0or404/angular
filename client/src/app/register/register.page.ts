import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ApiService } from '../common/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: any = {};
  public submitted: Boolean = false;

  constructor(private router: Router, private service: ApiService) {
   }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['home']);
  }

  submit(f){
    
    this.submitted = true;
    if(f.valid){
      this.user.confirm_password = this.user.password;
      this.service.API('post', 'user/register',this.user,false).subscribe((data:any)=>{
        if(data.status==200){
          this.service.alertPopUp('Success');
          this.service.setToken('user',JSON.stringify(data.data));
          this.router.navigate(['/main/dashboard']);
        }
        else{
          alert("Server Error");
        }
      });
    }
  }

}
