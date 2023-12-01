import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsComponent } from './regions.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PaysService } from 'src/app/services/pays.service';

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionsComponent],
      providers: [PaysService, HttpClient, HttpHandler]
    });
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
