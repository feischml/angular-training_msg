import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersparentComponent } from './usersparent.component';

describe('UsersparentComponent', () => {
  let component: UsersparentComponent;
  let fixture: ComponentFixture<UsersparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
