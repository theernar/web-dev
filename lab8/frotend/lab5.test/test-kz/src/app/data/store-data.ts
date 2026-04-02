import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const categories: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 13',
    description: 'Apple smartphone',
    price: 350000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
    likes: 0,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Samsung Galaxy A55',
    description: 'Samsung smartphone',
    price: 220000,
    rating: 4.7,
    image: '',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-chernyi-117420615/',
    likes: 0,
    categoryId: 1
  },
  {
    id: 3,
    name: 'MacBook Air M1',
    description: 'Apple laptop',
    price: 500000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-m1-8-gb-256-gb-ssd-seryi-kosmos-100797845/',
    likes: 0,
    categoryId: 2
  }
];