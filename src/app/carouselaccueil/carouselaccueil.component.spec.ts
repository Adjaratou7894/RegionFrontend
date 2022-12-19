import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselaccueilComponent } from './carouselaccueil.component';

describe('CarouselaccueilComponent', () => {
  let component: CarouselaccueilComponent;
  let fixture: ComponentFixture<CarouselaccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselaccueilComponent ],
     
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
