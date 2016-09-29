/**
 * Created by Ben on 8/22/2016.
 */
import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked  } from '@angular/core';
import './rxjs-operators';
import {NavContent} from "./nav/dashboard/content/nav.content";
declare var jQuery:any;

@Component({
    selector: 'my-blog',
    template: `
        <nav-header></nav-header>
        <nav-section></nav-section>
        <!--<nav-dashboard></nav-dashboard>-->
        <router-outlet></router-outlet>
        <nav-sponsor></nav-sponsor>
        <nav-footer></nav-footer>
    `
})
export class AppComponent implements OnInit, AfterViewInit  {

    ngOnInit() {

    }

    ngAfterViewInit  () {
            let createTag = function () {
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'plugins/js/app.js';
                document.body.appendChild(script);
            };
            console.log("create_tag...................")
            createTag();
    }
}