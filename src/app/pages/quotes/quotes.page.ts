import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>;
    author: string = '';
    
    constructor(private router: Router, private api: ApiService, private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
        this.quotes = this.api.getQuotes();
    }

    searchChanged(author) {
        this.author = author.detail.value;
        this.router.navigateByUrl(`/tabs/quotes/${author}`);
        console.log (this.author);
        
    }

}
