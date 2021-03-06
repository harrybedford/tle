import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class DataService {

	constructor(private jsonp: Jsonp,
				private http: Http) {}

	public getStory$(id): Observable<any> {
		let params = new URLSearchParams();
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');
		return this.jsonp
			.get('http://www.thelondoneconomic.com/api/get_post/?post_id=' + id, { search: params })
			.map(response => response.json());
	}

	public getCategory$(category, count): Observable<any> {
		let params = new URLSearchParams();
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');
		return this.jsonp
			.get('http://www.thelondoneconomic.com/' + category + '/page/' + count +'?json=1&exclude=content,excerpt', { search: params })
			.map(response => response.json());
	}

	public getHeadline$(): Observable<any> {
		let params = new URLSearchParams();
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');
		return this.jsonp
			.get('http://www.thelondoneconomic.com/tag/headline/?json=1&count=1', { search: params })
			.map(response => response.json());
	}

	public search$(query): Observable<any> {
		for (let char of query) {
			if (char === ' ') {
				char = '+';
			}
		}
		let params = new URLSearchParams();
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');
		return this.jsonp
			.get('http://www.thelondoneconomic.com/?s=' + query + '&json=1', { search: params })
			.map(response => response.json());
	}

}