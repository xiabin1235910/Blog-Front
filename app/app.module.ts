/**
 * Created by Ben on 8/22/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {routing} from "./app.routing";
import {dashboardModule} from "./nav/dashboard/dashboard.module";

@NgModule({
    imports:      [ BrowserModule, dashboardModule, routing ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }