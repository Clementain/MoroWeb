import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { VidMoroComponent } from './components/vid-moro/vid-moro.component';
import { SubSectionComponent } from './components/sub-section/sub-section.component';
import { AppRoutingModule } from './app-routing.module';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { EnlacesComponent } from './components/enlaces/enlaces.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    VidMoroComponent,
    SubSectionComponent,
    NoticiasComponent,
    EnlacesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
