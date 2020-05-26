import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_CHAR = 'favouriteCharacters';

@Injectable({
    providedIn: 'root'
})

export class LikeService {

    constructor(private storage1: Storage) { }

    getAllFavouriteCharacters() {
        return this.storage1.get(STORAGE_CHAR);
    }
    isFavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }
    favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                result.push(characterId);
                return this.storage1.set(STORAGE_CHAR, result);
            } else {
                return this.storage1.set(STORAGE_CHAR, [characterId]);
            }
        });
    }
    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage1.set(STORAGE_CHAR, result);
            }
        });
    }

}
