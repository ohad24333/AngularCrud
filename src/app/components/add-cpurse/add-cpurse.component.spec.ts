import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCpurseComponent } from './add-cpurse.component';

describe('AddCpurseComponent', () => {
  let component: AddCpurseComponent;
  let fixture: ComponentFixture<AddCpurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCpurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCpurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
