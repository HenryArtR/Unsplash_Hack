import { Component } from '@angular/core';
import { ImagesService } from '../services/images.service';


interface Paginator {
  first: number,
  page:  number,
  rows: number,
  pageCount: number
}

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent {

  bgImg: object = {}
  busqueda: boolean = false;
  valorBusqueda: string = ''
  imgRegular: string[] = []
  totalPages: number = 347

  constructor(
    private imgsrv: ImagesService,
  ) { }

  changePage( e: Paginator ) {

    if (this.busqueda) {
      this.imgsrv.getImagesByName(this.valorBusqueda, e.page +1)
    } else {
      this.imgsrv.getImages(e.page+1) 
    }
    
  }

  searchImg(v:HTMLInputElement) {

    this.busqueda = true
    this.valorBusqueda = v.value   
    this.imgsrv.getImagesByName(this.valorBusqueda)
    v.value = ''
  }



  ngOnInit() {

    this.imgsrv.getRandomImg()
    this.imgsrv.getImgRandom().subscribe((r:any)=>{
      this.bgImg = {
        'background-image': `url(${r})`,
      }
    })
    
    this.imgsrv.getImages(1)
    this.imgsrv.getNumOfPages().subscribe((res:any)=>{
      this.totalPages = res      
    })
    
    this.imgsrv.getImgRegular().subscribe((res:any) => {
      this.imgRegular = res
    })    


  
  }

}
