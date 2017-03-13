import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-story',
  templateUrl: 'story.html'
})
export class Story {

  constructor(public navCtrl: NavController) {
    
  }

  category = 'Sport';
  headline = 'Does promoting a low-cost image at a high-cost airport work?';
  author = 'Jack Peat';
  pubDate = new Date();
  content = '<p>There’s a deathly silence around the boarding gates of the newly built Terminal 2 at Heathrow. Silly season has passed and the departure lounges are filled with the dulcet whispers of business chit chat, a serene time to fly indeed.</p><p>With low cost carriers relatively new to the scene at Heathrow Airport – many falling out of groups such as Lufthansa who would have already had slots available to run – it is still early to see whether the airport will prove fertile ground or a poisoned chalice for budget carriers.</p><p>Still, with low cost airlines flying at a higher load factor – people on the plane – than ever before, it was with some surprise that I went through the online check-in process the night before to find a near complete selection of seats to choose from, confirmed on the day by a flight with no more than 30 people on, which sparked my curiosity.</p>';

}