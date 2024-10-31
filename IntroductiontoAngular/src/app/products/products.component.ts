import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any[] = [
    {
      ID: 1,
      image: "./asset/images/pro1.webp",
      Name: "Bouquet of Roses",
      Description: "A stunning bouquet of fresh roses, perfect for any occasion.",
      Price: 800 
    },
    {
      ID: 2,
      image: "./asset/images/pro2.jpg",
      Name: "Bloomerangs Flowers",
      Description: "A vibrant mix of colorful blooms that bring joy and cheer.",
      Price: 900 
    },
    {
      ID: 3,
      image: "./asset/images/pro3.jpeg",
      Name: "Time To Celebrate Black Rose",
      Description: "Elegant black roses that add a unique touch to celebrations.",
      Price: 5000 
    },
    {
      ID: 4,
      image: "./asset/images/pro4.jpg",
      Name: "Red Roses Cheer Up Bunch",
      Description: "A cheerful bunch of red roses to brighten anyone's day.",
      Price: 1200 
    },
    {
      ID: 5,
      image: "./asset/images/pro5.jpeg",
      Name: "Floral Side Basket",
      Description: "A beautiful arrangement in a charming basket, perfect for gifting.",
      Price: 4000 
    },
    {
      ID: 6,
      image: "./asset/images/pro6.jpg",
      Name: "Pink Present Box",
      Description: "A lovely pink box filled with an assortment of delightful flowers.",
      Price: 1500 
    }
  ];
  getDiscountedPrice(price: number): number {
    let discount = 0;
  
  
    if (price <= 1000) {
      discount = 0.20;
    } else if (price > 1000 && price < 2000) {
      discount = 0.10; 
    }
  
 
    return price - (price * discount);
  }
    
}
