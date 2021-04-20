import { Injectable } from "@angular/core";
import { iReview } from "../interfaces";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class GeneralService {
    constructor(private http: HttpClient) {}
    addReview(review: iReview): Observable<any> {
       return this.http.post(`${environment.backEndApi}/review`, review);
    }

    getGenders(): Observable<any> {
        return this.http.get(`${environment.backEndApi}/genders`);
    }

    getAnalitycs(): Observable<any> {
        return this.http.get(`${environment.backEndApi}/analytics`);
    }

    getCountries(): Observable<any> {
        return this.http.get(`${environment.backEndApi}/countries`);
    }
}