import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    getArbitraryNumber(min: any, max: any) {
        return Math.random() * (max - min) + min;
    }
}