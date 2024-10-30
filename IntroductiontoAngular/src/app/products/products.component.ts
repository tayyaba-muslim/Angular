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
      image: "./asset/images/pro1.jpg",
      Name: "Wireless Bluetooth Headphones",
      Description: "Over-ear wireless headphones with noise-canceling technology and 20-hour battery life.",
      Price: 800 
    },
    {
      ID: 2,
      image: "./asset/images/pro2.jpg",
      Name: "Portable Power Bank",
      Description: "20,000mAh power bank with fast charging capability and multiple USB ports.",
      Price: 900 
    },
    {
      ID: 3,
      image: "./asset/images/pro3.webp",
      Name: "Smart Home Security Camera",
      Description: "1080p HD indoor security camera with night vision and motion detection alerts.",
      Price: 5000 
    },
    {
      ID: 4,
      image: "./asset/images/pro4.webp",
      Name: "Fitness Tracker Watch",
      Description: "Waterproof fitness tracker with heart rate monitoring, step tracking, and sleep analysis.",
      Price: 1200 
    },
    {
      ID: 5,
      image: "./asset/images/pro5.webp",
      Name: "Electric Kettle",
      Description: "1.7-liter stainless steel electric kettle with temperature control and auto shut-off feature.",
      Price: 4000 
    },
    {
      ID: 6,
      image: "./asset/images/pro6.jpg",
      Name: "Gaming Mouse",
      Description: "Ergonomic gaming mouse with customizable RGB lighting and high-precision sensor.",
      Price: 1500 
    }
  ];
  getDiscountedPrice(price: number): number {
    let discount = 0;
  
    // Determine discount based on price
    if (price <= 1000) {
      discount = 0.20; // 20% off
    } else if (price > 1000 && price < 2000) {
      discount = 0.10; // 10% off
    }
  
    // Calculate discounted price
    return price - (price * discount);
  }
    
}
