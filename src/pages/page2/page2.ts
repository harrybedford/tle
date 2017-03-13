import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  category = 'Sport';
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
