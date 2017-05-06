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

  pages: Array<{title: string, component: any, slug: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Latest News', component: Home, slug: '/' },
      { title: 'Sport', component: Category, slug: 'sport' },
      { title: 'Entertainment', component: Category, slug: 'entertainment' },
      { title: 'Film', component: Category, slug: 'film' },
      { title: 'Lifestyle', component: Category, slug: 'lifestyle' },
      { title: 'Travel', component: Category, slug: 'travel' },
      { title: 'Food & Drink', component: Category, slug: 'food-drink' },
      { title: 'Tech & Auto', component: Category, slug: 'tech-auto' },
      { title: 'Property', component: Category, slug: 'property' },
      { title: 'Business', component: Category, slug: 'news/business' },
      { title: 'Economics', component: Category, slug: 'news/economics' },
      { title: 'Music', component: Category, slug: 'entertainment/music' },
      { title: 'Football', component: Category, slug: 'sport/football' }
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
    this.nav.setRoot(page.component, {category: page.title, slug: page.slug});
  }
}
