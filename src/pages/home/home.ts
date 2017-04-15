import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import * as moment  from 'moment';
import { DataService } from '../../services/DataService';
import { CATEGORIES } from '../../mocks/categories';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class Home {

    constructor(public navCtrl: NavController,
                private dataService: DataService) { }

    @ViewChild(Nav) nav: Nav;

    categories = CATEGORIES;

    ngOnInit() {

        this.dataService.getCategory$('sport').subscribe((data) => {
                this.categories[1].name = data.category.title;
                this.categories[1].stories[0].title = data.posts[0].title;
                this.categories[1].stories[0].image = data.posts[0].thumbnail;
                this.categories[1].stories[0].date = moment(data.posts[0].date).format('MMMM Do, YYYY');
                this.categories[1].stories[1].title = data.posts[1].title;
                this.categories[1].stories[1].image = data.posts[1].thumbnail;
                this.categories[1].stories[1].date = moment(data.posts[1].date).format('MMMM Do, YYYY');
        });

    }




}
