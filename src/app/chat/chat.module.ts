import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';
import { FormsModule } from '@angular/forms';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [ChatDialogComponent],
  exports: [ ChatDialogComponent ], // <-- export here
  providers: [ChatService,HttpModule]
})
export class ChatModule { }

