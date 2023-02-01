import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RootInfo, RootObject } from '../interfaces/unsplash.interface';

@Injectable( {
  providedIn: 'root'
} )
export class ImagesService {

  url: string = 'https://api.unsplash.com/'
  imgRegular: string[] = [];

  imgRegular$: Subject<string[]> = new Subject;
  numOfPages$: Subject<number> = new Subject


  getImgRegular() {
    return this.imgRegular$.asObservable()
  }

  getNumOfPages(){
    return this.numOfPages$.asObservable()
  }

  setImgRegular( valor: string[] ) {
    this.imgRegular$.next( valor )
  }




  constructor(
    private http: HttpClient
  ) { }

  getImages( page: number ) {

    this.imgRegular = []
    const params = new HttpParams()
      .set( 'client_id', 'r-yMIsKDT6B-VvEU8to5xDyItactLX6-HK4nHjxpPfI' )
      .set( 'page', `${page}` )
      .set( 'per_page', 30 )

    return this.http.get<RootInfo[]>( `${this.url}photos`, { params } )
      .subscribe( result => {
        result.map( img => {
          this.imgRegular.push( img.urls.regular )
          this.setImgRegular( this.imgRegular )
        } )
      }, err => {
        console.log( err );

      } )
  }

  getImagesByName( q: string, p?: number ) {

    this.imgRegular = []

    const params = new HttpParams()
      .set( 'client_id', 'r-yMIsKDT6B-VvEU8to5xDyItactLX6-HK4nHjxpPfI' )
      .set( 'page', `${p}` )
      .set( 'per_page', 30 )
      .set( 'query', `${q}` )

    return this.http.get<RootObject>( `${this.url}search/photos`, { params } ).subscribe( res => {
      res.results.map( img => {
        this.imgRegular.push( img.urls.regular )
        this.imgRegular$.next( this.imgRegular )
      } )

      this.numOfPages$.next(res.total_pages)
      
    }, err => {
      console.log( err );

    } )
  }
}
