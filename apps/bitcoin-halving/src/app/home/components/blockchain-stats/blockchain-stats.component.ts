import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BlockchainService } from '../../services/blockchain/blockchain.service';
import { Observable, of } from 'rxjs';
import { DateTime } from 'luxon';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './blockchain-stats.component.html',
  styleUrls: ['./blockchain-stats.component.scss']
})
export class BlockchainStatsComponent implements OnInit {
  stats$: Observable<any>;
  test = of('test');
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
    this.stats$ = this.blockchainService.getStats().pipe(
      map(stats => {
        stats.data.countdowns[0].dateTime = DateTime.local().plus({
          seconds: stats.data.countdowns[0].time_left
        });
        console.log(stats.data.countdowns[0]);
        return stats;
      })
    );
    console.log('initialized blockchain');
  }
}
