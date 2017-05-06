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
		this.dataService.getCategory$(this.navParams.get('slug')).subscribe(
			data => {
				this.headline.id = data.posts[0].id;
                this.headline.title = data.posts[0].title;
                this.headline.image = data.posts[0].thumbnail_images.full.url;
                this.headline.date = data.posts[0].date;
                for (let i = 0; i < 8; i ++) {
                    this.stories[i].id = data.posts[i + 1].id;
                    this.stories[i].title = data.posts[i + 1].title;
                    this.stories[i].image = data.posts[i + 1].thumbnail_images.medium.url;
                    this.stories[i].date = moment(data.posts[i + 1].date).format('MMMM Do, YYYY');
                }
                this.loading.dismiss();
                this.cloak = false;
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
    	//load more data
    }

	public loading = this.loadingCtrl.create({content: 'Loading...'});

	public cloak: boolean = true;

	public pushPage = Story;

	public headline: Headline = HEADLINE;

	public category: string = this.navParams.get('category');

	public stories: any = STORIES;

}
