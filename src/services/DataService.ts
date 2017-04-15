import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class DataService {

	constructor(private jsonp: Jsonp) {}

	getStory$ (id) {

		let params = new URLSearchParams();
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');

		return this.jsonp
			.get('http://www.thelondoneconomic.com/api/get_post/?post_id=' + id, { search: params })
			.map(response => response.json());
	}

	getCategory$ (category) {
		let params = new URLSearchParams();
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');

		return this.jsonp
			.get('http://www.thelondoneconomic.com/' + category + '?json=1&exclude=content,excerpt', { search: params })
			.map(response => response.json());
	}

}