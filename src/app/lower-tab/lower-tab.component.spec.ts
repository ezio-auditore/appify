import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LowerTabComponent } from './lower-tab.component';

describe('LowerTabComponent', () => {
  let component: LowerTabComponent;
  let fixture: ComponentFixture<LowerTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerTabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LowerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
