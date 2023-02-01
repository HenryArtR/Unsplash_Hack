import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';




@NgModule({
  exports: [
    MenubarModule,
    InputTextModule,
    PaginatorModule
    
  ],
})
export class PrimeModule {}