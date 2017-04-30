import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import * as moment  from 'moment';
import { DataService } from '../../services/DataService';
import { CATEGORIES } from '../../mocks/categories';
import { HEADLINE } from '../../mocks/headline';
import { Headline } from '../../models/headline';
import { HomeCategory } from '../../models/home-category';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class Home {

    constructor(public navCtrl: NavController,
                private dataService: DataService) { }

    @ViewChild(Nav) nav: Nav;

    public categories: Array<HomeCategory>;

    public headline: Headline = HEADLINE;

    public ngOnInit(): void {

        this.categories = CATEGORIES;

        this.dataService.getCategory$('news').subscribe(
            data => {
                this.headline.id = data.posts[0].id;
                this.headline.title = data.posts[0].title;
                this.headline.image = data.posts[0].thumbnail_images.full.url;
                this.headline.date = data.posts[0].date;
                this.categories[0].name = data.category.title;
                for (let i = 0; i < 5; i ++) {
                    this.categories[0].stories[i].id = data.posts[i + 1].id;
                    this.categories[0].stories[i].title = data.posts[i + 1].title;
                    this.categories[0].stories[i].image = data.posts[i + 1].thumbnail_images.medium.url;
                    this.categories[0].stories[i].date = moment(data.posts[i + 1].date).format('MMMM Do, YYYY');
                }
            }
        );

        this.dataService.getCategory$('sport').subscribe(
            data => {
                this.categories.push();
                this.categories[1].name = data.category.title;
                for (let i = 0; i < 5; i ++) {
                    this.categories[1].stories[i].title = data.posts[i].title;
                    this.categories[1].stories[i].image = data.posts[i].thumbnail_images.medium.url;
                    this.categories[1].stories[i].date = moment(data.posts[i].date).format('MMMM Do, YYYY');
                }
        });

        this.dataService.getCategory$('entertainment').subscribe(
            data => {
                this.categories.push();
                this.categories[2].name = data.category.title;
                for (let i = 0; i < 5; i ++) {
                    this.categories[2].stories[i].title = data.posts[i].title;
                    this.categories[2].stories[i].image = data.posts[i].thumbnail_images.medium.url;
                    this.categories[2].stories[i].date = moment(data.posts[i].date).format('MMMM Do, YYYY');
                }
        });

        this.dataService.getCategory$('film').subscribe(
            data => {
                this.categories.push();
                this.categories[3].name = data.category.title;
                for (let i = 0; i < 5; i ++) {
                    this.categories[3].stories[i].title = data.posts[i].title;
                    this.categories[3].stories[i].image = data.posts[i].thumbnail_images.medium.url;
                    this.categories[3].stories[i].date = moment(data.posts[i].date).format('MMMM Do, YYYY');
                }
        });

        this.dataService.getCategory$('lifestyle').subscribe(
            data => {
                this.categories.push();
                this.categories[4].name = data.category.title;
                for (let i = 0; i < 5; i ++) {
                    this.categories[4].stories[i].title = data.posts[i].title;
                    this.categories[4].stories[i].image = data.posts[i].thumbnail_images.medium.url;
                    this.categories[4].stories[i].date = moment(data.posts[i].date).format('MMMM Do, YYYY');
                }
        });

        this.dataService.getCategory$('travel').subscribe(
            data => {
                this.categories.push();
                this.categories[5].name = data.category.title;
                for (let i = 0; i < 5; i ++) {
                    this.categories[5].stories[i].title = data.posts[i].title;
                    this.categories[5].stories[i].image = data.posts[i].thumbnail_images.medium.url;
                    this.categories[5].stories[i].date = moment(data.posts[i].date).format('MMMM Do, YYYY');
                }
        });

        this.dataService.getCategory$('food-drink').subscribe(
            data => {
                this.categories.push();
                this.categories[6].name = data.category.title;
                for (let i = 0; i < 5; i ++) {
                    this.categories[6].stories[i].title = data.posts[i].title;
                    this.categories[6].stories[i].image = data.posts[i].thumbnail_images.medium.url;
                    this.categories[6].stories[i].date = moment(data.posts[i].date).format('MMMM Do, YYYY');
                }
        });

        this.dataService.getCategory$('tech-auto').subscribe(
            data => {
                this.categories.push();
                this.categories[7].name = data.category.title;
                for (let i = 0; i < 5; i ++) {
                    this.categories[7].stories[i].title = data.posts[i].title;
                    this.categories[7].stories[i].image = data.posts[i].thumbnail_images.medium.url;
                    this.categories[7].stories[i].date = moment(data.posts[i].date).format('MMMM Do, YYYY');
                }
        });

        this.dataService.getCategory$('property').subscribe(
            data => {
                this.categories.push();
                this.categories[8].name = data.category.title;
                for (let i = 0; i < 5; i ++) {
                    this.categories[8].stories[i].title = data.posts[i].title;
                    this.categories[8].stories[i].image = data.posts[i].thumbnail_images.medium.url;
                    this.categories[8].stories[i].date = moment(data.posts[i].date).format('MMMM Do, YYYY');
                }
        });

    }

}
