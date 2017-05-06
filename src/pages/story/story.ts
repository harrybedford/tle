import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataService } from '../../services/DataService';
import * as moment  from 'moment';
import { StoryModel } from '../../models/story';

@Component({
	selector: 'page-story',
	templateUrl: 'story.html'
})
export class Story {

	constructor(public navCtrl: NavController,
				public params: NavParams,
				public loadingCtrl: LoadingController,
				private dataService: DataService) { }

	public story: StoryModel = {
		id: 0,
		title: '',
		image: '',
		date: '',
		author: '',
		category: '',
		content: '',
		url: ''
	}

	public loading = this.loadingCtrl.create({content: 'Loading...'});

	public cloak: boolean = true;

	public ngOnInit(): void {
		this.loading.present();
        this.dataService.getStory$(this.params.get('id')).subscribe(
        	data => {
	            this.story = {
					id: data.post.id,
					title: data.post.title,
					image: data.post.thumbnail_images.full.url,
					date: moment(data.post.date).format('MMMM Do, YYYY'),
					author: data.post.author.name,
					category: data.post.categories[0].title,
					content: data.post.content,
					url: data.post.url
				}
				this.loading.dismiss();
				this.cloak = false;
	        }
        );
    }

}