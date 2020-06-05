import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() posts: any[];
  selectedPost: Post;

  constructor() { }

  ngOnInit() {
  }
  onLike(apost: Post): void {
        this.selectedPost = post ;
      for ( let post of this.posts) {
          if ( post === apost ) {
              post.likeIt ++ ;
          }
      }
  }
  onDisLike(apost: Post): void {
        this.selectedPost = post ;
      for ( let post of this.posts) {
          if ( post === apost ) {
            post.dontLikeIt ++ ;
          }
      }
  }
  getColor(i : Number){
          if ( i % 2 === 0 ) {
              return 'bisque' ;
          }
          return 'white';
  }

}