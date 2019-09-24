import { Component } from '@angular/core';
import { MessageService } from '../service/message.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent{
  durationInSeconds = 5;
  message: string = '';

  constructor(public messageService: MessageService, private _snackBar: MatSnackBar) { }

}
