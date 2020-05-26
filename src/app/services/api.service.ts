import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes')
        //return this.http.get('https://pure-oasis-11280.herokuapp.com/assets/episodes.json')
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`)
        //return this.http.get('https://pure-oasis-11280.herokuapp.com/assets/episode.json')
    }

    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters')
        //return this.http.get('https://pure-oasis-11280.herokuapp.com/assets/characters.json')
    }

    getCharacter(char_id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${char_id}`)
        //return this.http.get('https://pure-oasis-11280.herokuapp.com/assets/character.json')
    }

    getQuotes() {
        //return this.http.get('https://www.breakingbadapi.com/api/quotes')
        return this.http.get('https://pure-oasis-11280.herokuapp.com/assets/quotes.json')
    }
    
    getQuote(author) {
        return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${author}`)
    }

    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/deaths')
        //return this.http.get('https://pure-oasis-11280.herokuapp.com/assets/deaths.json')
    }

    getDeath(id) {
        //return this.http.get('https://www.breakingbadapi.com/api/deaths')
        return this.http.get('https://pure-oasis-11280.herokuapp.com/assets/death.json')
    }

}