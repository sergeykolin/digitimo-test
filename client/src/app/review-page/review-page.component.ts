import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, RoutesRecognized } from '@angular/router';
import { iGender, iCountry } from '../interfaces';
import { GeneralService } from '../services/general.service';
import { ErrorService } from '../classes/error.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {

  reviewForm: FormGroup;
  formError: boolean = false;
  genders: iGender[];
  previewPage: string;
  countries: iCountry[];

  constructor(private _router: Router, private generalService: GeneralService) {
    this.previewPage = document.referrer;
    this.getData();
  }

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null),
      gender: new FormControl(null),
      country: new FormControl(null),
      rating: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(5)]),
      orign_page: new FormControl(this.previewPage),
      note: new FormControl(null)
    })
  }

  getData(): void {
    const joinedRequest = forkJoin([this.generalService.getGenders(), this.generalService.getCountries()])
    joinedRequest.subscribe(
      ([gendersList, countriesList]) => {
        this.genders = gendersList;
        this.countries = countriesList.map(item => { return {id: item.name, code: item.name} });
      },
      error => ErrorService.show(error.message)
    )
  }

  onSubmit(): void {
    if (!this.reviewForm.valid) {
      this.formError = true;
      return;
    }
    this.reviewForm.value.country = this.reviewForm.value.country ? this.reviewForm.value.country[0].code : null;
    this.generalService.addReview(this.reviewForm.value).subscribe(
      result => {
        this._router.navigate(['/thank-you'], { queryParams: {previewPage: this.previewPage} } );
      },
      error => ErrorService.show(error.message)
    )
  }

}
