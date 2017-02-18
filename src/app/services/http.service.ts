import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
 
@Injectable()
export class HttpService {
 
    constructor(private http: Http){ }
     
    getDataToMap() {
        return this.http.get('http://api.dev.aispot.no/lighthouse/spot/nearby?lat=59.879037&lng=59.87903');
    }

    getDataToMark(id) {
        return this.http.get('http://api.dev.aispot.no/lighthouse/content/' + id);
    }
}