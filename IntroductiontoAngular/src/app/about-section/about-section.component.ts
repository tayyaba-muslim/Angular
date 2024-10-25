import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  Title:string= "Paradise On Earth"
  AboutDescription:string="Kashmir, often referred to as 'Paradise on Earth,' captivates visitors with its breathtaking landscapes of lush valleys, snow-capped mountains, and pristine lakes, offering a unique blend of natural beauty, rich cultural heritage, and a tranquil atmosphere that makes it a sought-after destination for travelers from around the world."
  btnClass:string="btn btn-warning";
  Aboutimage="./asset/images/about.jpg";

  private isFirstContent: boolean = true;

  
  ShowDetails(){
    if(this.isFirstContent){
      this.Title= "Natural Beauty"
      this.AboutDescription="Kashmir is renowned for its stunning landscapes, featuring lush green valleys, towering snow-capped mountains, and crystal-clear lakes. The region is home to iconic sites like Dal Lake, where traditional houseboats and shikaras glide across the water, and the breathtaking Sonamarg, often called the 'Meadow of Gold.' Each season transforms the scenery, with vibrant flowers in spring, lush greenery in summer, colorful autumn foliage, and a winter wonderland that attracts snow enthusiasts."
      this.btnClass="btn btn-warning";
      this.Aboutimage="./asset/images/about2.jpg";
    }else{
       this.Title= "Paradise On Earth"
       this.AboutDescription="Kashmir, often referred to as 'Paradise on Earth,' captivates visitors with its breathtaking landscapes of lush valleys, snow-capped mountains, and pristine lakes, offering a unique blend of natural beauty, rich cultural heritage, and a tranquil atmosphere that makes it a sought-after destination for travelers from around the world."
       this.btnClass="btn btn-danger";
       this.Aboutimage="./asset/images/about.jpg";
    }
    this.isFirstContent= !this.isFirstContent;

  }

}