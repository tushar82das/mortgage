import { Component, OnInit } from '@angular/core';
import { MortgageApiService } from '../services/mortgage-api.service';
import { ILoans } from '../loans';

@Component({
  selector: 'app-mortgage-history',
  templateUrl: './mortgage-history.component.html',
  styleUrls: ['./mortgage-history.component.css']
})
export class MortgageHistoryComponent implements OnInit {

  loans: ILoans[];

  constructor(private mortgageApiService: MortgageApiService) {
    this.loans = [];
  }

  ngOnInit() {
    this.getLoanHistory();
  }

  getLoanHistory() {
    this.mortgageApiService.getLoans().subscribe(history => this.loans = history);
  }

}
