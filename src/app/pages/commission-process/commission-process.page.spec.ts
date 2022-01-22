import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommissionProcessPage } from './commission-process.page';

describe('CommissionProcessPage', () => {
  let component: CommissionProcessPage;
  let fixture: ComponentFixture<CommissionProcessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionProcessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommissionProcessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
