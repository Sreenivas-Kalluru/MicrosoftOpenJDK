import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellProviderComponent } from './shell-provider.component';

describe('ShellProviderComponent', () => {
  let component: ShellProviderComponent;
  let fixture: ComponentFixture<ShellProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
