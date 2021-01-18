import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MortgageApiService } from '../services/mortgage-api.service';

@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  loanForm: FormGroup;
  isChecked: Boolean = false;
  isAppliedSuccess: Boolean = false;
  areaCodes: any[] = [
    { code: '753001', sqftPrice: 500 },
    { code: '757028', sqftPrice: 800 },
    { code: '753004', sqftPrice: 1000 },
    { code: '754333', sqftPrice: 1200 },
    { code: '560041', sqftPrice: 1500 }
  ];

  loanAmount: Number;
  loanTenure: Number;
  mortgageType: string;
  propertyAreaCode: string;
  propertySize: Number;
  sqftPrice: Number;

  constructor(private fb: FormBuilder, private mortgageApiService: MortgageApiService) { }

  ngOnInit() {
    this.loanForm = this.fb.group({
      mortgageType: ['', Validators.required],
      propertySize: ['', Validators.required],
      propertyAreaCode: ['', Validators.required],
      loanAmount: ['1000000'],
      loanTenure: ['']
    });
  }

  onSubmit() {
    const { propertyAreaCode, loanAmount, mortgageType, loanTenure, propertySize } = this.loanForm.value;
    const sqftPrice = this.getSqftPrice(propertyAreaCode);
    this.loanForm.value.sqftPrice = sqftPrice;

    this.loanAmount = loanAmount;
    this.loanTenure = loanTenure;
    this.mortgageType = mortgageType;
    this.propertyAreaCode = propertyAreaCode;
    this.propertySize = propertySize;
    this.sqftPrice = sqftPrice;


    if (this.loanForm.status === "VALID") {
      console.log(this.loanForm);
      this.isChecked = true;
    }

  }

  goBack() {
    this.isChecked = false;
  }

  getSqftPrice(AreaCode: string) {
    return this.areaCodes.filter(data => data.code === AreaCode)[0].sqftPrice;
  }

  applyLoan() {
    this.mortgageApiService.applyLoan(this.loanForm.value).subscribe(loan => {
      console.log(loan);
      this.isAppliedSuccess = true;
    });
  }

}
