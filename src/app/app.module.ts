import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MomentPipe } from './moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
