import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        //return this.http.get('https://www.breakingbadapi.com/api/episodes')
        return this.http.get('https://8100-cb950d29-7c05-4049-8a3b-5ce0a0d85b97.ws-eu01.gitpod.io/assets/episodes.json')
    }

    getEpisode(id) {
        //return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`)
        return this.http.get('https://8100-cb950d29-7c05-4049-8a3b-5ce0a0d85b97.ws-eu01.gitpod.io/assets/episode.json')
    }

    getCharacters() {
        //return this.http.get('https://www.breakingbadapi.com/api/characters')
        return this.http.get('https://8100-cb950d29-7c05-4049-8a3b-5ce0a0d85b97.ws-eu01.gitpod.io/assets/characters.json')
    }

    getCharacter(char_id) {
        //return this.http.get(`https://www.breakingbadapi.com/api/characters/${char_id}`)
        return this.http.get('https://8100-cb950d29-7c05-4049-8a3b-5ce0a0d85b97.ws-eu01.gitpod.io/assets/character.json')
    }

    getQuotes() {
        //return this.http.get('https://www.breakingbadapi.com/api/quotes')
        return this.http.get('https://8100-cb950d29-7c05-4049-8a3b-5ce0a0d85b97.ws-eu01.gitpod.io/assets/quotes.json')
    }

    //getQuote(quote_id) {
    //    return this.http.get('https://www.breakingbadapi.com/api/quotes/${quote_id}')
    //}

    getDeaths() {
        //return this.http.get('https://www.breakingbadapi.com/api/deaths')
        return this.http.get('https://8100-cb950d29-7c05-4049-8a3b-5ce0a0d85b97.ws-eu01.gitpod.io/assets/deaths.json')
    }

    getDeath(id) {
        //return this.http.get('https://www.breakingbadapi.com/api/deaths')
        return this.http.get('https://8100-cb950d29-7c05-4049-8a3b-5ce0a0d85b97.ws-eu01.gitpod.io/assets/death.json')
    }

}