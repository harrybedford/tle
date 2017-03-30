import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TLE } from './app.component';
import { Home } from '../pages/home/home';
import { Category } from '../pages/category/category';
import { Story } from '../pages/story/story';

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
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TLE,
    Home,
    Category,
    Story
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
