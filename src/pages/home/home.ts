import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';

import { Story } from '../story/story';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class Home {

    constructor(public navCtrl: NavController) { }

    @ViewChild(Nav) nav: Nav;

    // openPage(page) {
    //     this.navCtrl.push(page);
    //   }

    categories = [{
            name: 'news',
            stories: [{
                headline: 'Brexit Brussels: Lloyds Of London Sets Up In Brussels',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/1280px-Lloyds.building.london.arp_.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Trump hires his daughter to join step son in incestuous administration',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Trump.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Government misses teacher recruitment target for fifth consecutive year – by a lot',
                image: '',
                date: ''
            },{
                headline: 'Campaigners Chain Themselves to Plane To Block Deportation Flight',
                image: '',
                date: ''
            },{
                headline: 'PMQs 29th March – “Goodbye at Dover, goodbye my friend, you have been the one for me”',
                image: '',
                date: ''
            }]
        },{
            name: 'sport',
            stories: [{
                headline: 'Brexit Brussels: Lloyds Of London Sets Up In Brussels',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/1280px-Lloyds.building.london.arp_.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Trump hires his daughter to join step son in incestuous administration',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Trump.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Government misses teacher recruitment target for fifth consecutive year – by a lot',
                image: '',
                date: ''
            },{
                headline: 'Campaigners Chain Themselves to Plane To Block Deportation Flight',
                image: '',
                date: ''
            },{
                headline: 'PMQs 29th March – “Goodbye at Dover, goodbye my friend, you have been the one for me”',
                image: '',
                date: ''
            }]
        },{
            name: 'entertainment',
            stories: [{
                headline: 'Brexit Brussels: Lloyds Of London Sets Up In Brussels',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/1280px-Lloyds.building.london.arp_.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Trump hires his daughter to join step son in incestuous administration',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Trump.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Government misses teacher recruitment target for fifth consecutive year – by a lot',
                image: '',
                date: ''
            },{
                headline: 'Campaigners Chain Themselves to Plane To Block Deportation Flight',
                image: '',
                date: ''
            },{
                headline: 'PMQs 29th March – “Goodbye at Dover, goodbye my friend, you have been the one for me”',
                image: '',
                date: ''
            }]
        },{
            name: 'film',
            stories: [{
                headline: 'Brexit Brussels: Lloyds Of London Sets Up In Brussels',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/1280px-Lloyds.building.london.arp_.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Trump hires his daughter to join step son in incestuous administration',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Trump.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Government misses teacher recruitment target for fifth consecutive year – by a lot',
                image: '',
                date: ''
            },{
                headline: 'Campaigners Chain Themselves to Plane To Block Deportation Flight',
                image: '',
                date: ''
            },{
                headline: 'PMQs 29th March – “Goodbye at Dover, goodbye my friend, you have been the one for me”',
                image: '',
                date: ''
            }]
        },{
            name: 'lifestyle',
            stories: [{
                headline: 'Brexit Brussels: Lloyds Of London Sets Up In Brussels',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/1280px-Lloyds.building.london.arp_.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Trump hires his daughter to join step son in incestuous administration',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Trump.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Government misses teacher recruitment target for fifth consecutive year – by a lot',
                image: '',
                date: ''
            },{
                headline: 'Campaigners Chain Themselves to Plane To Block Deportation Flight',
                image: '',
                date: ''
            },{
                headline: 'PMQs 29th March – “Goodbye at Dover, goodbye my friend, you have been the one for me”',
                image: '',
                date: ''
            }]
        },{
            name: 'travel',
            stories: [{
                headline: 'Brexit Brussels: Lloyds Of London Sets Up In Brussels',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/1280px-Lloyds.building.london.arp_.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Trump hires his daughter to join step son in incestuous administration',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Trump.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Government misses teacher recruitment target for fifth consecutive year – by a lot',
                image: '',
                date: ''
            },{
                headline: 'Campaigners Chain Themselves to Plane To Block Deportation Flight',
                image: '',
                date: ''
            },{
                headline: 'PMQs 29th March – “Goodbye at Dover, goodbye my friend, you have been the one for me”',
                image: '',
                date: ''
            }]
        },{
            name: 'food',
            stories: [{
                headline: 'Brexit Brussels: Lloyds Of London Sets Up In Brussels',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/1280px-Lloyds.building.london.arp_.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Trump hires his daughter to join step son in incestuous administration',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Trump.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Government misses teacher recruitment target for fifth consecutive year – by a lot',
                image: '',
                date: ''
            },{
                headline: 'Campaigners Chain Themselves to Plane To Block Deportation Flight',
                image: '',
                date: ''
            },{
                headline: 'PMQs 29th March – “Goodbye at Dover, goodbye my friend, you have been the one for me”',
                image: '',
                date: ''
            }]
        },{
            name: 'tech',
            stories: [{
                headline: 'Brexit Brussels: Lloyds Of London Sets Up In Brussels',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/1280px-Lloyds.building.london.arp_.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Trump hires his daughter to join step son in incestuous administration',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Trump.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Government misses teacher recruitment target for fifth consecutive year – by a lot',
                image: '',
                date: ''
            },{
                headline: 'Campaigners Chain Themselves to Plane To Block Deportation Flight',
                image: '',
                date: ''
            },{
                headline: 'PMQs 29th March – “Goodbye at Dover, goodbye my friend, you have been the one for me”',
                image: '',
                date: ''
            }]
        },{
            name: 'property',
            stories: [{
                headline: 'Brexit Brussels: Lloyds Of London Sets Up In Brussels',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/1280px-Lloyds.building.london.arp_.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Trump hires his daughter to join step son in incestuous administration',
                image: 'http://www.thelondoneconomic.com/wp-content/uploads/2017/03/Trump.jpg',
                date: 'March 30, 2017'
            },{
                headline: 'Government misses teacher recruitment target for fifth consecutive year – by a lot',
                image: '',
                date: ''
            },{
                headline: 'Campaigners Chain Themselves to Plane To Block Deportation Flight',
                image: '',
                date: ''
            },{
                headline: 'PMQs 29th March – “Goodbye at Dover, goodbye my friend, you have been the one for me”',
                image: '',
                date: ''
            }]
        }
    ]




}
