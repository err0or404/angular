import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public user = {};
  public city:string = '';

  constructor(private service: ApiService, private router: Router) {
    this.user = JSON.parse(this.service.getToken('user'));
    this.city = this.service.getToken('city');
   }

  ngOnInit() {}

  logout(){
    this.service.removeToken('user');
    this.service.removeToken('city');
    this.router.navigate(['/home']);
  }

}
