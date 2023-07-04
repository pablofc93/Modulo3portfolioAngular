import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarpanelComponent } from './nabvarpanel.component';

describe('NabvarpanelComponent', () => {
  let component: NabvarpanelComponent;
  let fixture: ComponentFixture<NabvarpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabvarpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NabvarpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
