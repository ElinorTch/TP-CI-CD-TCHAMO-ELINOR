import { Component, Input, SimpleChanges } from '@angular/core';
import { NotifService } from 'src/app/services/notif.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() numberOfResearch: number = 0;
  @Input() score: number = 0;

  constructor(
    private _notif: NotifService
  ) { }

  ngOnInit() {
    this.getResearch();
    this.getNotif();
  }

  getResearch() {
    this._notif.getSearch().subscribe(
      (data) => this.numberOfResearch = data
    )
  }

  getNotif() {
    this._notif.getNotif().subscribe(
      (data) => this.score = data
    )
  }

}
