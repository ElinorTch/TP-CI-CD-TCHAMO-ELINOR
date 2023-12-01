import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IRegion } from 'src/app/models/iregion';
import { ISousRegion } from 'src/app/models/isous-region';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-sous-regions',
  templateUrl: './sous-regions.component.html',
  styleUrls: ['./sous-regions.component.scss']
})
export class SousRegionsComponent implements OnInit {

  sousRegions: ISousRegion[] = [];

  @Input() currentRegion !: IRegion;
  @Output() currentSousRegion = new EventEmitter<ISousRegion>();

  constructor(
    private _paysService: PaysService,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllSousRegions();
  }

  getAllSousRegions(): void {
    this.sousRegions = [];
    this._paysService.listeSousRegions().subscribe(
      (data) => {
        for (let sousRegions of data) {
          if (this.currentRegion) {
            if (sousRegions.region == this.currentRegion.region) {
              this.sousRegions.push(sousRegions);
            }
          }
        }
      }
    )
  }

  getCurrentSousRegion(sousRegion: ISousRegion): void {
    this.currentSousRegion.emit(sousRegion);
  }

}
