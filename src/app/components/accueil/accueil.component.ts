import { Component } from '@angular/core';
import { IRegion } from 'src/app/models/iregion';
import { ISousRegion } from 'src/app/models/isous-region';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  currentRegion !: IRegion;
  currentSousRegion !: ISousRegion;
  paysLength !: number;
  rate: number = 3.15;

  numberOfResearch : number = 0
  currentPage : number = 1;

  graphe_europe: any[] = [];
  graphe_afrique: any[] = [];
  graphe_asia: any[] = [];
  graphe_america: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentRegion(region : IRegion): void{
    this.currentRegion = region;
  }

  getCurrentSousRegion(region : ISousRegion): void{
    this.currentSousRegion = region;
  }

  getPaysLength(paysLength: number): void{
    this.paysLength = paysLength;
  }

  getNumberOfResearch(paysLength: number): void{
    this.numberOfResearch = paysLength;
  }

  getEuropeDataset(europeDataset: any[]): void{
    this.graphe_europe = europeDataset;
  }

  getAfricaDataset(africaDataset: any[]): void{
    this.graphe_afrique = africaDataset;
  }

  getAsiaDataset(asiaDataset: any[]): void{
    this.graphe_asia = asiaDataset;
  }

  getAmericaDataset(americaDataset: any[]): void{
    this.graphe_america = americaDataset;
  }

}
