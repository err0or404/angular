import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {

  public post:any ={};
  public submitted:Boolean = false;
  public city: string = '';
  public user:any;

  constructor(public service: ApiService, private router: Router) {
    this.city = this.service.getToken('city');
    this.user = JSON.parse(this.service.getToken('user'));
   }

  ngOnInit() {}

  submit(f,p){
    this.submitted = true;
    if(f.valid){
      let data = {
        title: p.title,
        price: p.price,
        type: p.type,
        city: this.city,
        createdByName: this.user.username,
        createdById: this.user.id,
        description: p.description
      }
      this.service.API('post','advertisement/',data,false).subscribe((data:any)=>{
        if(data.status==200){
          this.service.alertPopUp('Success');
          this.router.navigate(['/main/advertisement']);
        }
      });
    }
  }

  back(){
    this.router.navigate(['/main/advertisement']);
  }

}
