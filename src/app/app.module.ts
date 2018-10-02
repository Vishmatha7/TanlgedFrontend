import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { CarouselModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
