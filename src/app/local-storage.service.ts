import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageService {
  STORAGE_KEY = 'movie_id';
  favList = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }

  storeOnLocalStorage(movieId: number): void {

    //obtenir des éléments du tableau
    this.favList = this.storage.get(this.STORAGE_KEY) || []
    //mettre un nouveau film vers un tableau
    this.favList.push(movieId);
    // insérer la matrice mise à jour dans le stockage local
    this.storage.set(this.STORAGE_KEY, this.favList);
  }

  getFromLocalStorage() {
    // obtenir une gamme de films à partir du stockage local
    return this.storage.get(this.STORAGE_KEY) || [];
  }

  //supprimer le film du stockage
  removeFromLocalStorage(value) {
    this.favList = this.storage.get(this.STORAGE_KEY) || []
    for (let i = 0; i < this.favList.length; i++) {
      if (this.favList[i] === value) {
        this.favList.splice(i, 1);
      }
    }
    this.storage.set(this.STORAGE_KEY, this.favList);
  }


  //Effacer le stockage
  clearFavourites() {
    this.storage.remove(this.STORAGE_KEY);
    this.favList = [];
  }

}
