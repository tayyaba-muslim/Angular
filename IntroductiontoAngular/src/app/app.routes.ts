import { Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        
        path:"",
        component:SliderComponent
    },
    {
        
        path:"about",
        component:AboutSectionComponent
    },
    {
        
        path:"contact",
        component:ContactComponent
    },
    {
        
        path:"product",
        component:ProductsComponent
    }
];

