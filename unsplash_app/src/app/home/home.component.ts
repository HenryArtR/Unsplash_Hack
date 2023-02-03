import { HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
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

  items!: MenuItem[];
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

    // this.imgsrv.getRandomImg()
    // this.imgsrv.getImgRandom().subscribe((r:any)=>{
    //   this.bgImg = {
    //     'background-image': `url(${r})`,
    //   }
    // })
    
    // this.imgsrv.getImages(1)
    // this.imgsrv.getNumOfPages().subscribe((res:any)=>{
    //   this.totalPages = res      
    // })
    
    // this.imgsrv.getImgRegular().subscribe((res:any) => {
    //   this.imgRegular = res
    // })    


    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }

}
