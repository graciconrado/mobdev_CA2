import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes')
        //return this.http.get('https://8100-dfc1daa3-815b-46ef-8169-b60214e407b8.ws-eu01.gitpod.io/assets/episodes.json')
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`)
        //return this.http.get('https://8100-dfc1daa3-815b-46ef-8169-b60214e407b8.ws-eu01.gitpod.io/assets/episode.json')
    }

    getCharacters() {
        return this.http.get('https://www.breakingbadapi.com/api/characters')
        //return this.http.get('https://8100-dfc1daa3-815b-46ef-8169-b60214e407b8.ws-eu01.gitpod.io/assets/characters.json')
    }

    getCharacter(char_id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${char_id}`)
        //return this.http.get('https://8100-dfc1daa3-815b-46ef-8169-b60214e407b8.ws-eu01.gitpod.io/assets/character.json')
    }

    getQuotes() {
        //return this.http.get('https://www.breakingbadapi.com/api/quotes')
        return this.http.get('https://8100-dfc1daa3-815b-46ef-8169-b60214e407b8.ws-eu01.gitpod.io/assets/quotes.json')
    }
    
    getQuote(author) {
        return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${author}`)
    }

    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/deaths')
        //return this.http.get('https://8100-dfc1daa3-815b-46ef-8169-b60214e407b8.ws-eu01.gitpod.io/assets/deaths.json')
    }

    getDeath(id) {
        //return this.http.get('https://www.breakingbadapi.com/api/deaths')
        return this.http.get('https://8100-dfc1daa3-815b-46ef-8169-b60214e407b8.ws-eu01.gitpod.io/assets/death.json')
    }

}