import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app-material.module';

import { AuthComponent } from './auth/auth/auth.component';
import { ComponentsComponent, PizzaPartyComponent } from './components/components/components.component';
import { LayoutsComponent } from './layouts/layouts/layouts.component' ;
import {MatSnackBarModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ComponentsComponent,
    LayoutsComponent,
    PizzaPartyComponent,
    
  ],
  entryComponents:[PizzaPartyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AppMaterialModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
