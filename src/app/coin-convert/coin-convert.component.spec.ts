import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinConvertComponent } from './coin-convert.component';

describe('CoinConvertComponent', () => {
  let component: CoinConvertComponent;
  let fixture: ComponentFixture<CoinConvertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinConvertComponent]
    });
    fixture = TestBed.createComponent(CoinConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
