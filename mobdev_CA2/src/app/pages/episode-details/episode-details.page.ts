import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from '../../services/favourite.service';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
    episode: any;
    isFavourite = false;
    episodeId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService,
        private FavouriteService: FavouriteService) { }

    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
        });

        this.FavouriteService.isFavourite(this.episodeId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    favouriteEpisode() {
        this.FavouriteService.favouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = true;
        });
    }
    unfavouriteEpisode() {
        this.FavouriteService.unfavouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = false;
        });
    }
}