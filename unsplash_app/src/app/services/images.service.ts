import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootInfo } from '../interfaces/unsplash.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url: string = 'https://api.unsplash.com/'


  constructor(
    private http: HttpClient
  ) { }

  getImagesRandom(): Observable<RootInfo[]> {

    const params = new HttpParams()
    .set('client_id', 'r-yMIsKDT6B-VvEU8to5xDyItactLX6-HK4nHjxpPfI')
    .set('page', "1");

    return this.http.get<RootInfo[]>( `${this.url}photos`, {params})
  }
}
