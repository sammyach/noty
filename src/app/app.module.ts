import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { SengaBoxComponent } from './home/senga-box/senga-box.component';
import { SengaFrameComponent } from './home/senga-frame/senga-frame.component';
import { SengaDetailsComponent } from './home/senga-details/senga-details.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { CreateSengaComponent } from './home/create-senga/create-senga.component';
import { SengaNoteComponent } from './home/senga-note/senga-note.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    SengaBoxComponent,
    SengaFrameComponent,
    SengaDetailsComponent,
    LoaderComponent,
    CreateSengaComponent,
    SengaNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
