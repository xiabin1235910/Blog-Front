/**
 * Created by Ben on 8/23/2016.
 */
import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../service/blog.service";
@Component({
    selector: 'nav-content',
    templateUrl: 'app/nav/dashboard/content/nav.content.html',
    providers: [BlogService]
})
export class NavContent implements OnInit {

    constructor(private blogService: BlogService){}
    blog: any;

    ngOnInit() {
        this.blogService.getBlogs().subscribe(
            data => this.blog = data,
            error=> console.log('error')
        );
    }

}