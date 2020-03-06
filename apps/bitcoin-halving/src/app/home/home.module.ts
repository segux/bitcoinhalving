import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home/home.page';
import { BlockchainService } from './services/blockchain/blockchain.service';
import { BlockchainStatsComponent } from './components/blockchain-stats/blockchain-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomePage, BlockchainStatsComponent],
  providers: [BlockchainService],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule, MatCardModule]
})
export class HomeModule {}
