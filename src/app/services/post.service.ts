import { Injectable } from '@angular/core';
import { Post } from '../post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

    posts = [
        {
            title: 'Mon premier Post',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            likeIt: 0,
            dontLikeIt: 0,
            created_at: new Date()
        },
        {
            title: 'Mon deuxieme Post',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            likeIt: 0,
            dontLikeIt: 0,
            created_at: new Date()
        },
        {
            title: 'Mon 3ieme Post',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            likeIt: 0,
            dontLikeIt: 0,
            created_at: new Date()
        }
    ];

  constructor() { }

}
