import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { ReviewPageComponent } from "./review-page/review-page.component";
import { AppComponent } from "./app.component";
import { NotfoundPageComponent } from "./notfound-page/notfound-page.component";
import { ThankYouPageComponent } from "./thank-you-page/thank-you-page.component";
import { AnalyticsPageComponent } from "./analytics-page/analytics-page.component";
import { HeaderComponent } from "./header/header.component";

const routers: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {path: '', component: HeaderComponent},
            {path: 'review', component: ReviewPageComponent},
            {path: 'thank-you', component: ThankYouPageComponent},
            {path: 'analytics', component: AnalyticsPageComponent},
            {path: '**', component: NotfoundPageComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routers)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}