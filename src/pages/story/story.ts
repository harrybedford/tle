import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../services/DataService';
import * as moment  from 'moment';

@Component({
	selector: 'page-story',
	templateUrl: 'story.html'
})
export class Story {

	constructor(public navCtrl: NavController,
				private dataService: DataService) { }

	story: Object = {
		id: 0,
		title: '',
		image: '',
		date: '',
		author: '',
		category: '',
		content: '',
		url: ''
	}

	ngOnInit() {

        this.dataService.getStory$(44776).subscribe((data) => {
            this.story = {
				id: data.post.id,
				title: data.post.title,
				image: data.post.attachments[0].images.medium_large.url,
				date: moment(data.post.date).format('MMMM Do, YYYY'),
				author: data.post.author.name,
				category: data.post.categories[0].title,
				content: data.post.content,
				url: data.post.url
			}
        });

    }


}