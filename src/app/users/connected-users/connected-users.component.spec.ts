import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedUsersComponent } from './connected-users.component';

describe('ConnectedUsersComponent', () => {
  let component: ConnectedUsersComponent;
  let fixture: ComponentFixture<ConnectedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
