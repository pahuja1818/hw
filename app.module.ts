import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
