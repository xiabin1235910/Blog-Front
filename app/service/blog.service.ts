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
    private getBlogUrl: string = 'http://rat051:8080/blog/';  // URL to web API



    getBlogs (): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.getBlogUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
