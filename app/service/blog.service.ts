/**
 * Created by Ben on 9/2/2016.
 */
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {BaseService} from "./base.service";
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BlogService extends BaseService {
    constructor (private http: Http) {
        super();
    }
    private getBlogUrl: string = 'http://rat051:8080/api/blog/';  // URL to web API
    private getTagUrl: string = 'http://rat051:8080/api/tags/';  // URL to web API


    getBlogs (id?: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(id ? this.getBlogUrl + id : this.getBlogUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    getTags (id?: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(id ? this.getTagUrl + id : this.getTagUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
