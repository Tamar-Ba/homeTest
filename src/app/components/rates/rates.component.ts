import { Component, OnInit } from '@angular/core';
import { RatesService } from 'src/app/services/rates.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {

  exchangeRates: any;

  constructor(private rates: RatesService) { }

  ngOnInit(): void {

    this.rates.GetExchangeRates().subscribe(res=>{
      this.exchangeRates = res.ExchangeRatesResponseCollectioDTO.ExchangeRates.ExchangeRateResponseDTO
                      .filter((x: { CurrentChange: number; })=>x.CurrentChange < 0)
    })

  }

}
