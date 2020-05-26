import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-quote-details',
    templateUrl: './quote-details.page.html',
    styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
    quote: any;
    authorId = null;
    results: Observable<any>;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

    ngOnInit() {
        this.authorId = this.activatedRoute.snapshot.paramMap.get('author');
        this.results = this.api.getQuote(this.authorId);
        console.log (this.authorId);

    }
}