import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../../data/product';
import { Product } from '../../models/product.models';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = products;
}