import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaysComponent } from './pays.component';
import { PaysService } from 'src/app/services/pays.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TOAST_CONFIG, ToastrModule, ToastrService } from 'ngx-toastr';

describe('PaysComponent', () => {
  let component: PaysComponent;
  let fixture: ComponentFixture<PaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaysComponent],
      imports: [ToastrModule.forRoot()],
      providers: [PaysService, HttpClient, HttpHandler, ToastrService]
    });
    fixture = TestBed.createComponent(PaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
