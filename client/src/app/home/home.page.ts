import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../common/api.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public user: any = {
    email: "",
    password: ''
  }
  public fd = new FormData(); 
  public submitted: Boolean = false;
  public u:any;

  constructor(private router:Router, private service: ApiService) {
  }
  
  register(){
    this.router.navigate(['/register']);
  }

  submit(f){
    this.submitted = true;
    if(f.valid){
      this.fd.append('email',this.user.email);
      this.fd.append('password',this.user.password);
      this.service.API('post', 'user/login', this.fd, true).subscribe((data:any)=>{
        if(data.status == 200){
          this.service.alertPopUp('Success');
          this.service.setToken('user',JSON.stringify(data.data));
          this.router.navigate(['/dashboard']);
        }
        else{
          alert('Invalid Credentials');
        }
      })
    }
  }
}
