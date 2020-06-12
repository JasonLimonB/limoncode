import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgBanner = 'assets/img/undraw_design_team_af2y.svg';
  imgNewDesc = 'assets/img/undraw_online_connection_6778.svg';
  cardPaginaweb = 'assets/img/undraw_publish_post_vowb.svg';
  appWeb = 'assets/img/undraw_social_friends_nsbv.svg';
  appMovil = 'assets/img/undraw_profile_image_n3cj.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
