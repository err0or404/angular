import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  public user: any = {
    city:''
  };
  public ads: Array<any> = [];

  constructor(private router:Router, private service: ApiService) {
    this.user.city = this.service.getToken('city');
    this.getData();
   }

  ngOnInit() {}

  getData(){
    this.service.API('get', 'advertisement/'+this.user.city+'/', '', false).subscribe((data:any)=>{
      if(data.status==200){
        this.ads = data.data;
      }
    });
  }
  
  goToCity(){
    this.router.navigate(['/select-city']);
  }

  format(s){
    if(s.length>15){
      return s.substr(0, 15);
    }
    else{
      return s;
    }
  }

  goToDetail(id){
    // console.log(id);
    this.router.navigate(['/main/detail/'+id]);
  }

}
