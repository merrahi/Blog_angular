import {Component} from '@angular/core';
import { Post } from './post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'blog';
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

}
