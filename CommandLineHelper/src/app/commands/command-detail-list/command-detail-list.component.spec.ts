import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandDetailListComponent } from './command-detail-list.component';

describe('CommandDetailListComponent', () => {
  let component: CommandDetailListComponent;
  let fixture: ComponentFixture<CommandDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
