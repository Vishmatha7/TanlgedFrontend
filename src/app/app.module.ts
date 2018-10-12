import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { CarouselModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RestService } from './rest.Service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultPageComponent } from './search-result-page/search-result-page.component';
import { ProffesionLsitComponent } from './proffesion-lsit/proffesion-lsit.component';
import { HomepageComponent } from './homepage/homepage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule, MatOption} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {NgbModule, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';



const appRoutes: Routes = [
  {
    path: 'proffesion',
    component: ProffesionLsitComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    //data: { title: 'Product Details' }
  },
  // {
  //   path: 'product-add',
  //   //component: ProductAddComponent,
  //   data: { title: 'Product Add' }
  // },
  // {
  //   path: 'product-edit/:id',
  //   component: ,
  //   data: { title: 'Product Edit' }
  // },
  // { path: '',
  //   //redirectTo: '/products',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SearchBarComponent,
    SearchResultPageComponent,
    ProffesionLsitComponent,
    HomepageComponent,
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    [NgSelectModule, FormsModule],
    CarouselModule.forRoot(),
    HttpModule,HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
