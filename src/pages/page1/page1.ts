import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  stories = [
    {
      headline: 'headline',
      date: '10th February',
      imageUrl: 'assets/img/Trump-Devil.jpg'
    },
    {
      headline: 'headline',
      date: '10th February',
      imageUrl: 'assets/img/Trump-Devil.jpg'
    },
    {
      headline: 'headline',
      date: '10th February',
      imageUrl: 'assets/img/Trump-Devil.jpg'
    },
    {
      headline: 'headline',
      date: '10th February',
      imageUrl: 'assets/img/Trump-Devil.jpg'
    },
    {
      headline: 'headline',
      date: '10th February',
      imageUrl: 'assets/img/Trump-Devil.jpg'
    },
    {
      headline: 'headline',
      date: '10th February',
      imageUrl: 'assets/img/Trump-Devil.jpg'
    }
  ];

  
}
