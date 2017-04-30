import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment  from 'moment';
import { DataService } from '../../services/DataService';
import { Headline } from '../../models/headline';
import { HEADLINE } from '../../mocks/headline';
import { Story } from '../../models/story';
import { STORIES } from '../../mocks/category-stories';


@Component({
	selector: 'page-category',
	templateUrl: 'category.html'
})

export class Category {

	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				private dataService: DataService) { }

	public ngOnInit(): void {
		this.dataService.getCategory$(this.category).subscribe(
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
			}
		);
	}

	public headline: Headline = HEADLINE;

	public category: string = 'Sport';

	public stories: any = STORIES;

}
