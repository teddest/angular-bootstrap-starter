import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PublicComponent } from './public.component';

describe('PublicComponent', () => {
  let component: PublicComponent;
  let fixture: ComponentFixture<PublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicComponent
      ],
      imports: [
        RouterTestingModule,
        NgbModule
      ]
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the carousel component', () => {
    fixture = TestBed.createComponent(PublicComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const qry = compiled.querySelector('ngb-carousel').textContent;
    expect(qry).not.toBeNull();
  });

});
