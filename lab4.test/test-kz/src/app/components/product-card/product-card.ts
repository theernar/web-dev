import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  selectedImageIndex = 0;

  get selectedImage(): string {
    return this.product.images[this.selectedImageIndex];
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  getFullStars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  hasHalfStar(): boolean {
    return this.product.rating % 1 >= 0.5;
  }

  getEmptyStars(): number[] {
    const full = Math.floor(this.product.rating);
    const half = this.hasHalfStar() ? 1 : 0;
    return Array(5 - full - half).fill(0);
  }
}