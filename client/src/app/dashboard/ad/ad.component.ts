import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss'],
})
export class AdComponent implements OnInit {

  public ads: Array<any> = [];
  public user:any;

  constructor(private router: Router, private service: ApiService) {
    this.user = JSON.parse(this.service.getToken('user'));
    this.getData();
   }

  ngOnInit() {}

   getData(){
    this.service.API('get','createdById/'+this.user.id+'/','',false).subscribe((data:any)=>{
      if(data.status==200){
        this.ads = data.data;
      }
    });
   }

  format(st){
    if(st.length>17){
      let temp = st.substr(0,17);
      return temp+'...';
    }
    else{
      return st;
    }
  }

  detail(id){
    this.router.navigate(['/main/detail/'+id]);
  }

  delete(id){
    console.log(id);
    this.service.API('delete','advertisement_id/'+id+'/','',false).subscribe((data:any)=>{
      if(data.status==200){
        this.service.alertPopUp('Deleted');
        this.getData();
      }
    });
  }

  addPost(){
    this.router.navigate(['/main/add-post']);
  }

}
