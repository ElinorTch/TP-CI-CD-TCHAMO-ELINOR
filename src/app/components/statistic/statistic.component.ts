import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {

  dataIsLoaded: boolean = false;

  @Input() data_country: any[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.data_country);
      if (this.data_country.length > 0) {
        this.dataIsLoaded = true;
      }
    }, 1000)
  }

  ngOnchanges() {
    console.log(this.data_country);

    if (this.data_country.length > 0) {
      this.dataIsLoaded = true;
    }
  }
}
