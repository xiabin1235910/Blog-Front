/**
 * Created by Ben on 9/2/2016.
 */
import {Observable} from "rxjs/Observable";
import { Response } from '@angular/http';
export class BaseService {
    protected handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    protected extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
}