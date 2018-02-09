import { Component, OnInit ,Input} from '@angular/core';
import { ChatService ,Message} from '../../chat.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  str: string;
  action: any;
  speech: any;

  constructor(public chatService: ChatService){}
  ngOnInit() {  }

  sendValues()
  {
    console.log('STR value   '+ this.str);
    this.getOrder(this.str);
  }

  getOrder(value: any) {

      const userMessage = new Message(value, 'user');
      this.chatService.getResponse(value).subscribe(res => {
        this.action= res.result.action;
        this.speech= res.result.fulfillment.speech;
        //this.getCustomerOrder();
    });
  }
  getCustomerOrder()
  {
    this.chatService.getCustomerOrder().subscribe(res => {
      this.action= res.result.action;
      this.speech= res.result.fulfillment.speech;
      this.getCustomerOrder();
  });
  }
}