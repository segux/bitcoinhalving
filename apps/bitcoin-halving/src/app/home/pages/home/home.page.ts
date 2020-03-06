import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Injector,
  ComponentRef,
  DoCheck
} from '@angular/core';
import { BlockchainStatsComponent } from '../../components/blockchain-stats/blockchain-stats.component';

@Component({
  selector: 'bitcoinhalving-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, DoCheck {
  countdownRef: ComponentRef<BlockchainStatsComponent>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.createCountdownComponent();
  }

  ngDoCheck() {
    this.countdownRef.changeDetectorRef.detectChanges();
  }
  createCountdownComponent() {
    const countdownElement = document.querySelector('#countdown');
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      BlockchainStatsComponent
    );
    this.countdownRef = factory.create(this.injector, [], countdownElement);
  }
}
