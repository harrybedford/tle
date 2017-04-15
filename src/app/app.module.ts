import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TLE } from './app.component';
import { Home } from '../pages/home/home';
import { Category } from '../pages/category/category';
import { Story } from '../pages/story/story';

//service
import { DataService } from '../services/DataService';

@NgModule({
  declarations: [
    TLE,
    Home,
    Category,
    Story
  ],
  imports: [
    IonicModule.forRoot(TLE),
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TLE,
    Home,
    Category,
    Story
  ],
  providers: [
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      DataService
  ]
})
export class AppModule { }
