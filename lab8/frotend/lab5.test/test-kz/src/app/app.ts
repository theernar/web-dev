import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { categories, products } from './data/store-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
categories: Category[] = categories;
allProducts: Product[] = products;
  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }


  onDeleteProduct(id: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }

  onLikeProduct(id: number) {
    this.allProducts = this.allProducts.map(p =>
      p.id === id ? { ...p, likes: (p.likes ?? 0) + 1 } : p
    );
  }

  get filteredProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }
}