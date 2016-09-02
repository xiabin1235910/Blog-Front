/**
 * Created by Ben on 9/2/2016.
 */
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Rx';
import {BaseService} from "./base.service";
@Injectable()
export class BlogService extends BaseService {
    constructor (private http: Http) {
        super();
    }
    private getBlogUrl = 'http://localhost:8080/api/blog/';  // URL to web API
    getBlogs (): Observable<any> {
        return this.http.get(this.getBlogUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
