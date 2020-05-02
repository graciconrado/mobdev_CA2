import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LikeService } from '../../services/like.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
    character: any;
    isFavouriteCharacter = false;
    characterId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private LikeService: LikeService) { }
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        })

        this.LikeService.isFavouriteCharacter(this.characterId).then(isFavChar => {
            this.isFavouriteCharacter = isFavChar;
        });
    }

    favouriteCharacter() {
        this.LikeService.favouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacter = true;
        });
    }
    unfavouriteCharacter() {
        this.LikeService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavouriteCharacter = false;
        });
    }
}
