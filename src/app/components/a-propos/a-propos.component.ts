import { Component, EventEmitter, Output } from '@angular/core';
import { NotifService } from 'src/app/services/notif.service';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})
export class AProposComponent {
  rate : number = 0;
  @Output() score = new EventEmitter<number>();

  constructor(
    private _notif: NotifService
  ) { }

  ngOnInit() { }

  handleRate(event : any) {
    this._notif.setNotif(event);
  }


}
