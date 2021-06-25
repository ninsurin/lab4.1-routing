import { Component, OnInit,ViewChildren ,QueryList} from '@angular/core';
import { Product } from '../../Product/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { BackendService } from 'src/app/backend.service';
import { CatalogModule } from '../catalog.module';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductItemComponent)
 productItems!: QueryList<ProductItemComponent>;
 products: Product[];
 constructor(private backendService: BackendService) {
  this.products = [];
  }
 ngOnInit() {
  this.products = this.backendService.getProducts();
  }
 selectedProduct(productComponent: ProductItemComponent) {
  alert(`Product ${productComponent.product.name} selected`);
  this.productItems.forEach(p => {
  p.isSelected = false;
  });
  productComponent.isSelected = true;
  }
 }
 