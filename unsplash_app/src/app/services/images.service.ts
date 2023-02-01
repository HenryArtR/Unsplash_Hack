import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  getImages(page: number): Observable<RootInfo[]> {

    const params = new HttpParams()
    .set('client_id', 'r-yMIsKDT6B-VvEU8to5xDyItactLX6-HK4nHjxpPfI')
    .set('page', `${page}`)
    .set('per_page', 30)

    const headers = new HttpHeaders()
    .set('X-Total', '300')





    return this.http.get<RootInfo[]>( `${this.url}photos`, {params, headers})
  }


}
