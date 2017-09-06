import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import * as moment  from 'moment';
import { DataService } from '../../services/DataService';
import { Headline } from '../../models/headline';
import { HEADLINE } from '../../mocks/headline';
import { STORIES } from '../../mocks/category-stories';
import { Story } from '../story/story';


@Component({
	selector: 'page-category',
	templateUrl: 'category.html'
})

export class Category {

	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				public loadingCtrl: LoadingController,
				private dataService: DataService) { }

	public ngOnInit(): void {
		this.loading.present();
		this.getStories();
	}

	public getStories(): void {
		this.loadText = 'Loading...';
		this.dataService.getCategory$(this.navParams.get('slug'), this.count).subscribe(
			data => {
				if (this.count === 1) {
					this.headline.id = data.posts[0].id;
	                this.headline.title = data.posts[0].title;
	                this.headline.image = data.posts[0].thumbnail_images.full.url;
	                this.headline.date = data.posts[0].date;
	            }
                for (let i = 0; i < data.posts.length; i ++) {
                	let story = {
                		id: data.posts[i].id,
                		title: data.posts[i].title,
                		image: data.posts[i].thumbnail_images.medium.url,
                		date: moment(data.posts[i].date).format('MMMM Do, YYYY')
                	};
                    this.stories.push(story);
                }
                this.loading.dismiss();
                this.cloak = false;
                this.loadText = 'Load More';
			},
			error => {
				this.loading.dismiss();
				return error;
			}
		);
	}

	public refresh(refresher): void {
        this.navCtrl.setRoot(this.navCtrl.getActive().component, {category: this.navParams.get('category'), slug: this.navParams.get('slug')});
    }

    public loadMore(): void {
    	this.count ++;
    	this.getStories();
    }

	public loading = this.loadingCtrl.create({content: 'Loading...'});

	public cloak: boolean = true;

	public pushPage = Story;

	public headline: Headline = HEADLINE;

	public category: string = this.navParams.get('category');

	public count: number = 1;

	public stories: any = [];

	public loadText: string = 'Load More';

}
