import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes')
    }

    getEpisode(id) {
        return this.http.get('https://www.breakingbadapi.com/api/episodes/${id}')
    }

    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters')
    }

    getCharacter(char_id) {
        return this.http.get('https://www.breakingbadapi.com/api/characters/${char_id}')
    }

    getQuotes() {
        return this.http.get('https://www.breakingbadapi.com/api/quotes')
    }

    //getQuote(quote_id) {
    //    return this.http.get('https://www.breakingbadapi.com/api/quotes/${quote_id}')
    //}

    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/deaths')
    }

    getDeath(death_id) {
        return this.http.get('https://www.breakingbadapi.com/api/deaths/${death_id}')
    }
}