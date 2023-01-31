import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootInfo } from '../interfaces/unsplash.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private http: HttpClient
  ) { }

  getImagesRandom(): Observable<RootInfo[]> {
    return this.http.get<RootInfo[]>('​https://api.unsplash.com/photos?page=1?client_id=r-yMIsKDT6B-VvEU8to5xDyItactLX6-HK4nHjxpPfI')
  }
}
