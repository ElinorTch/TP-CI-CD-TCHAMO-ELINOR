import { Component, EventEmitter, Output } from '@angular/core';
import { IRegion } from 'src/app/models/iregion';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {

  regions: IRegion[] = [];

  @Output() region = new EventEmitter<IRegion>();
  @Output() europeDataset = new EventEmitter<any[]>();
  @Output() americaDataset = new EventEmitter<any[]>();
  @Output() africaDataset = new EventEmitter<any[]>();
  @Output() asiaDataset = new EventEmitter<any[]>();

  constructor(
    private _paysService: PaysService,
  ) { }

  ngOnInit() {
    this.getAllRegions();
    this.getAfricaDataset();
    this.getAmericaDataset();
    this.getAsiaDataset();
    this.getEuropeDataset();
  }

  getAllRegions(): void {
    this._paysService.listeRegions().subscribe(
      (data) => this.regions = data
    )
  }

  getCurrentRegion(region: IRegion): void {
    this.region.emit(region);
  }

  getEuropeDataset(): void {
    this._paysService.getEuropeDataSet().subscribe(
      (data) => this.europeDataset.emit(data)
    )
  }

  getAmericaDataset(): void {
    this._paysService.getAmericaDataSet().subscribe(
      (data) => this.americaDataset.emit(data)
    )
  }

  getAfricaDataset(): void {
    this._paysService.getAfricaDataSet().subscribe(
      (data) => this.africaDataset.emit(data)
    )
  }

  getAsiaDataset(): void {
    this._paysService.getAsiaDataSet().subscribe(
      (data) => this.asiaDataset.emit(data)
    )
  }
}
