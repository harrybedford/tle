import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Story } from '../pages/story/story';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Latest News', component: Page1 },
      { title: 'Sport', component: Page2 },
      { title: 'Entertainment', component: Page2 },
      { title: 'Sport', component: Page2 },
      { title: 'Film', component: Page2 },
      { title: 'Lifestyle', component: Page2 },
      { title: 'Travel', component: Page2 },
      { title: 'Food', component: Page2 },
      { title: 'Property', component: Page2 },
      { title: 'Story', component: Story}
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
