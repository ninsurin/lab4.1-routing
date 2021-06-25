import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { BackendService } from '../backend.service';

@NgModule({
declarations: [ProductItemComponent,ProductItemComponent,ProductListComponent],   
imports: [CommonModule],
providers: [BackendService],
exports: [ProductListComponent,ProductItemComponent]
})

export class CatalogModule { }
