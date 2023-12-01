import { Component, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICountry } from 'src/app/models/icountry';
import { ISousRegion } from 'src/app/models/isous-region';
import { NotifService } from 'src/app/services/notif.service';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent {

  paysLengt!: number;
  pattern!: string;

  pays: ICountry[] = [];
  paysPerPage: ICountry[] = [];

  @Input() currentSousRegion !: ISousRegion;
  @Input() currentPage: number = 2;

  @Output() searchPaysLength = new EventEmitter<number>();
  @Output() paysLength = new EventEmitter<number>();

  constructor(
    private _paysService: PaysService,
    private toastr: ToastrService,
    private _notifService: NotifService
  ) { }

  ngOnInit(): void {
    this.getAllPays();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllPays();
  }

  getAllPays(): void {
    this.pays = [];
    this._paysService.listePays().subscribe(
      (data) => {
        if (this.currentSousRegion) {
          for (let pays of data) {
            if (pays.subregion == this.currentSousRegion.subregion) {
              this.pays.push(pays);
            }
          }
          this.toastr.success("Liste des pays de la sous-région " + this.currentSousRegion.subregion, "Liste des pays");
          this.getTaillePays();
          if (this.currentPage) {
            this.paysPerPage = this.pays.slice((this.currentPage - 1) * 10, this.currentPage * 10);
          }
        }
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getTaillePays(): void {
    this.paysLength.emit(this.pays.length);
    this.paysLengt = this.pays.length;
    console.log("Taille du pays : ", this.paysLengt);
  }

  searchPays(event: any): void {
    console.log(event);
    this.paysPerPage = this.pays.filter(
      (pays) =>
        pays.name.toLowerCase().includes(event.toLowerCase())
        || pays.nom.toLowerCase().includes(event.toLowerCase())
    );
    if (this.paysPerPage.length == 0) { this.toastr.error("Aucun pays trouvé, effectué une autre recherche", "Recherche"); }
    this.searchPaysLength.emit(this.paysPerPage.length);
    this._notifService.setSearch(this.paysPerPage.length);

    if (event == "") {
      if (this.currentPage) {
        this.paysPerPage = this.pays.slice((this.currentPage - 1) * 10, this.currentPage * 10);
      }
    }
  }
}
