import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';




@NgModule({
  exports: [
    MenubarModule,
    InputTextModule,
    PaginatorModule,
    ButtonModule,
    CardModule
    
  ],
})
export class PrimeModule {}