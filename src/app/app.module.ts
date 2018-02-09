import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
