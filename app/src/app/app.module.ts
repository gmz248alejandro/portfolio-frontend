import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './components/banner/banner.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { LinesBgComponent } from './components/lines-bg/lines-bg.component';
import { ExpComponent } from './components/exp/exp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    BannerComponent,
    SpacerComponent,
    AboutMeComponent,
    LinesBgComponent,
    ExpComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
