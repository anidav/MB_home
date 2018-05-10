import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogosComponent } from './components/logos/logos.component';
import { SliderComponent } from './components/slider/slider.component';
import { PlanningComponent } from './components/planning/planning.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogosComponent,
    SliderComponent,
    PlanningComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
