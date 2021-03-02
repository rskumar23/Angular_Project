import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingvsInvterpoletionComponent } from './property-bindingvs-invterpoletion.component';

describe('PropertyBindingvsInvterpoletionComponent', () => {
  let component: PropertyBindingvsInvterpoletionComponent;
  let fixture: ComponentFixture<PropertyBindingvsInvterpoletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingvsInvterpoletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindingvsInvterpoletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
