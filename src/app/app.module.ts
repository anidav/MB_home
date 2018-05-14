import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogosComponent } from './components/logos/logos.component';
import { SliderComponent } from './components/slider/slider.component';
import { PlanningComponent } from './components/planning/planning.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogosComponent,
    SliderComponent,
    PlanningComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
