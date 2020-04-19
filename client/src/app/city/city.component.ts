import { Component, OnInit } from '@angular/core';

import { ApiService } from '../common/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {

  public cities: Array<any> = [];
  public search : string= '';

  constructor(private service: ApiService, private router: Router) { 
    this.cities = [
      {
        name:"kalol"
      },
      {  
        name:"agra"
      },
      {
        name:"ahmedabad"
      },
      {
        name:"mehsana"
      },
      {
        name:"patan"
      },
      {
        name:"ajmer"
      },
      {
        name:"vadodara"
      },
      {
        name:"kadi"
      },
      {
        name:"gandhinagar"
      },
      {
        name:"anand"
      }
    ]
  }

  ngOnInit() {}

  choose(city){
    this.service.setToken('city',city.name);
    this.router.navigate(['/main/dashboard']);
  }

  filter(){
    console.log(this.search)
  }

}
