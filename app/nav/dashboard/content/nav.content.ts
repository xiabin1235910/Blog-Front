/**
 * Created by Ben on 8/23/2016.
 */
import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../service/blog.service";
import {Blog} from "../../../model/blog";
@Component({
    selector: 'nav-content',
    templateUrl: 'app/nav/dashboard/content/nav.content.html',
    providers: [BlogService]
})
export class NavContent implements OnInit {
    newestBlog: Blog = new Blog('hello world...');

    constructor(private blogService: BlogService){  //private blogService: BlogService
    }

    ngOnInit() {
        this.blogService.getBlogs().subscribe(
            (data) => {
                console.log(data[0]);
                this.newestBlog.setBlog(data[0]);
                // console.log(data[0]);
            },
            (error)=> {
                console.log(error)
            }
        );
    }

}