import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/modules/material-modules';
import { ProductComponent } from './product/product.component';
import { GameModule } from './game/game-module';
import { PageFilterPipe } from './game/pipes/page-filter.pipe';






@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  
   
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
