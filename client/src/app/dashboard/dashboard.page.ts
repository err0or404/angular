import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public currentPage: string = 'Dashboard';
  public active = 'dashboard';

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  setActive(page){
    this.currentPage = page;
    if(page == 'Dashboard'){
      this.router.navigate(['/main/dashboard']);
      // this.currentPage = 'Dashboard';
    }
    else if(page == 'Wishlist'){
      this.router.navigate(['/main/wishlist']);
      // this.currentPage = 'Wishlist';
    }
    else if(page == 'Profile'){
      this.router.navigate(['/main/profile']);
      // this.currentPage = 'Profile';
    }
    else if(page == 'Chat'){
      this.router.navigate(['/main/chat']);
      // this.currentPage = 'Chat';
    }
    else if(page == 'Advertisement'){
      this.router.navigate(['/main/advertisement']);
      // this.currentPage = 'Advertisements';
    }
  }


}
