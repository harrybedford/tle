import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-story',
	templateUrl: 'story.html'
})
export class Story {

	constructor(public navCtrl: NavController) { }

	category = 'News';
	headline = 'Brexit Brussels: Lloyds Of London Sets Up In Brussels';
	author = 'Ben Gelblum';
	pubDate = 'March 30, 2017';

}