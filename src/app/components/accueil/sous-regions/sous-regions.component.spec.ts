import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousRegionsComponent } from './sous-regions.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PaysService } from 'src/app/services/pays.service';

describe('SousRegionsComponent', () => {
  let component: SousRegionsComponent;
  let fixture: ComponentFixture<SousRegionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SousRegionsComponent],
      providers: [PaysService, HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(SousRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
