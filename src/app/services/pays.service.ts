import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IRegion } from '../models/iregion';
import { ISousRegion } from '../models/isous-region';
import { ICountry } from '../models/icountry';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  URL = "https://restcountries.com/v3.1/all";

  constructor(
    private http: HttpClient,
  ) { }

  getAllPays(): Observable<any> {
    return this.http.get(this.URL);
  }

  // Recuperer toutes les regions sans doublons
  listeRegions(): Observable<IRegion[]> {
    return this.http.get<IRegion[]>("https://restcountries.com/v3.1/all").pipe(
      map((data: any) => {
        console.log(data);

        let regions: string[] = [];
        let region: any[] = [];
        for (let i = 0; i < data.length; i++) {
          if (!regions.includes(data[i].region)) {
            regions.push(data[i].region);
            region.push({
              region: data[i].region
            });
          }
        }
        return region;
      })
    )
  }

  // Recuperer toutes les sous-regions sans doublons
  listeSousRegions(): Observable<ISousRegion[]> {
    return this.http.get<ISousRegion[]>("https://restcountries.com/v3.1/all").pipe(
      map((data: any) => {
        let sousRegions: string[] = [];
        let sousRegion: any[] = [];
        for (let i = 0; i < data.length; i++) {
          if (!sousRegions.includes(data[i].subregion)) {
            sousRegions.push(data[i].subregion);
            sousRegion.push({
              subregion: data[i].subregion,
              region: data[i].region
            });
          }
        }
        return sousRegion;
      })
    )
  }


  listePays(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>("https://restcountries.com/v3.1/all").pipe(
      map((data: any) => {
        let pays: any[] = [];
        for (let i = 0; i < data.length; i++) {
          pays.push({
            nom: data[i].translations.fra.common,
            name: data[i].name.common,
            flag: data[i].flags.png,
            capital: data[i].capital,
            population: data[i].population,
            subregion: data[i].subregion,
          });
        }
        return pays;
      })
    )
  }

  getEuropeDataSet() {
    return this.http.get("https://restcountries.com/v3.1/all").pipe(
      map((data: any) => {
        let dataset: any[] = [];
        for (let pays of data) {
          if (pays.region == "Europe") {
            dataset.push({
              name: pays.translations.fra.common,
              value: pays.population,
            });
          }
        }
        dataset.sort((a: any, b: any) => b.value - a.value);
        dataset = dataset.slice(0, 10);
        return dataset;
      })
    )
  }

  getAfricaDataSet() {
    return this.http.get("https://restcountries.com/v3.1/all").pipe(
      map((data: any) => {
        let dataset: any[] = [];
        for (let pays of data) {
          if (pays.region == "Africa") {
            dataset.push({
              name: pays.translations.fra.common,
              value: pays.population,
            });
          }
        }
        dataset.sort((a: any, b: any) => b.value - a.value);
        dataset = dataset.slice(0, 10);
        return dataset;
      })
    )
  }

  getAsiaDataSet() {
    return this.http.get("https://restcountries.com/v3.1/all").pipe(
      map((data: any) => {
        let dataset: any[] = [];
        for (let pays of data) {
          if (pays.region == "Asia") {
            dataset.push({
              name: pays.translations.fra.common,
              value: pays.population,
            });
          }
        }
        dataset.sort((a: any, b: any) => b.value - a.value);
        dataset = dataset.slice(0, 5);
        return dataset;
      })
    )
  }

  getAmericaDataSet() {
    return this.http.get("https://restcountries.com/v3.1/all").pipe(
      map((data: any) => {
        let dataset: any[] = [];
        for (let pays of data) {
          if (pays.subregion == "South America" || pays.subregion == "North America") {
            dataset.push({
              name: pays.translations.fra.common,
              value: pays.population,
            });
          }
        }
        dataset.sort((a: any, b: any) => b.value - a.value);
        dataset = dataset.slice(0, 7);
        return dataset;
      })
    )
  }
}
