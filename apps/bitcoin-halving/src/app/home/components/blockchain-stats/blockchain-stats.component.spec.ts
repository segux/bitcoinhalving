import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainStatsComponent } from './blockchain-stats.component';

describe('BlockchainStatsComponent', () => {
  let component: BlockchainStatsComponent;
  let fixture: ComponentFixture<BlockchainStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
