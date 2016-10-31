/**
 * Created by Ben on 8/23/2016.
 */
import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../service/blog.service";
import {Blog} from "../../../model/blog";
import {Tag} from "../../../model/tag";
@Component({
    selector: 'nav-content',
    templateUrl: 'app/nav/dashboard/content/nav.content.html',
    providers: [BlogService]
})
export class NavContent implements OnInit {
    blog: Blog = new Blog('hello world...');
    blogList: Blog[];

    tagList: Tag[];

    constructor(private blogService: BlogService){  //private blogService: BlogService
    }

    ngOnInit() {
        this.blogService.getBlogs().subscribe(
            (data) => {
                this.blog.setBlog(data[0]);
                this.blogList = data;
            },
            (error)=> {
                console.log(error)
            }
        );

        this.blogService.getTags().subscribe(
            data => {
                this.tagList = data;
            },
            error => {
                console.log(error);
            }
        )
    }

}