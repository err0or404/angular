import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  public adId:string = '';
  public ad: Object = {};
  public saved:Boolean = false;

  constructor(private aroute: ActivatedRoute, private service: ApiService, private router: Router) {
    this.adId = aroute.snapshot.params.id;
    if(this.adId){
      this.service.API('get', 'advertisement_id/'+this.adId+'/','',false).subscribe((data:any)=>{
        if(data.status == 200){
          this.ad = data.data;
        }
      });
    }
    else{
      this.router.navigate(['/main/dashboard']);
    }
  }

  ngOnInit() {}

  save(){
    this.saved = true;
  }

}
