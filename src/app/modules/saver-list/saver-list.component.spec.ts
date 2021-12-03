import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaverListComponent } from './saver-list.component';

describe('SaverListComponent', () => {
  let component: SaverListComponent;
  let fixture: ComponentFixture<SaverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaverListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
