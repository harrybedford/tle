import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Category } from '../pages/category/category';
import { Story } from '../pages/story/story';


@Component({
  templateUrl: 'app.html'
})
export class TLE {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Latest News', component: Home },
      { title: 'Sport', component: Category },
      { title: 'Entertainment', component: Category },
      { title: 'Film', component: Category },
      { title: 'Lifestyle', component: Category },
      { title: 'Travel', component: Category },
      { title: 'Food', component: Category },
      { title: 'Property', component: Category },
      { title: 'Story', component: Story }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
