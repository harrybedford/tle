import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-category',
	templateUrl: 'category.html'
})

export class Category {

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	category = 'Sport';

	stories = [{
		headline: 'Charlton fan “threw punch” at Crystal Palace’s eagle',
		date: 'March 31, 2017',
		image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Eagle.jpg'
	},{
		headline: 'Arsenal’s empire needs a new emperor',
		date: 'March 21, 2017',
		image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Wenger-Empire.jpg'
	},{
		headline: '8 reasons that Wheelchair Basketball is the ultimate team-building event, by Christy Gregan',
		date: 'March 20, 2017',
		image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/unnamed-201.jpg'
	},{
		headline: 'Truth about David Haye injury and the Leigh Halfpenny saga',
		date: 'March 18, 2017',
		image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/3485707691_d33c8c79c3_b.jpg'
	},{
		headline: 'The final word on England v Italy Ruck-Gate',
		date: 'March 3, 2017',
		image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/James_Haskell_and_Dylan_Hartley_ruckgate-e1488496934224.jpg'
	},{
		headline: 'Leicester City should have built a statue honouring Claudio Ranieri – not sack him',
		date: 'March 1, 2017',
		image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/02/SWNS_RANIERI_GRAFFITI_07.jpg'
	},{
		headline: 'Crystal Palace star Yohan Cabaye asked about France return',
		date: 'February 15, 2017',
		image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/02/Yohan_Cabaye_2015.jpg'
	},{
		headline: 'Alastair Cook gets his final decision just right',
		date: 'February 7, 2017',
		image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/02/Alastair-Cook.jpg'
	}];

}
