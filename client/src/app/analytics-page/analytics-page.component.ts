import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { ErrorService } from '../classes/error.service';
import { iAnalytics } from '../interfaces';


@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.css']
})
export class AnalyticsPageComponent implements OnInit {

  analytics: iAnalytics;

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.generalService.getAnalitycs().subscribe(
      result => this.analytics = result.result,
      error => ErrorService.show(error.message)
    )
  }

}
