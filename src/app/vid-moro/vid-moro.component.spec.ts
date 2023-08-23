import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidMoroComponent } from './vid-moro.component';

describe('VidMoroComponent', () => {
  let component: VidMoroComponent;
  let fixture: ComponentFixture<VidMoroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidMoroComponent]
    });
    fixture = TestBed.createComponent(VidMoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
