import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';
import { PaysComponent } from './pays/pays.component';
import { RegionsComponent } from './regions/regions.component';
import { SousRegionsComponent } from './sous-regions/sous-regions.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TOAST_CONFIG, ToastrModule, ToastrService } from 'ngx-toastr';
import { StatisticComponent } from '../statistic/statistic.component';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccueilComponent,
        PaysComponent,
        RegionsComponent,
        SousRegionsComponent,
        StatisticComponent,
      ],
      imports: [ToastrModule.forRoot()],
      providers: [HttpClient, HttpHandler, ToastrService]
    });
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
