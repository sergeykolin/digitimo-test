import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.css']
})
export class ThankYouPageComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  previewPage: string;

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(
      params => this.previewPage = params.previewPage
    )
  }

}
