import { Component, OnInit } from '@angular/core';
import { ApiMoviesService } from '../../services/api-movies.service';
import { Imovies } from '../../models/imovies';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  movie:Imovies = {} as Imovies;
  movieId!: number;
  count!: number;

  constructor(private _apiMoviesService:ApiMoviesService,
    private _activatedRouter:ActivatedRoute,
    private _location:Location,
    private _CommentService:CommentService
  ){}

  ngOnInit(): void {
    this.movieId = Number(this._activatedRouter.snapshot.paramMap.get('id'));
    this._apiMoviesService.getMoviesById(this.movieId).subscribe({
      next:(res) => {
        this.movie = res
      },
      error:(err) => {
        console.log(err)
      }
    })
    
    this._CommentService.getComments().subscribe({
      next:(res) => {
        this.count = res.length
      }
    })
  }

  back(){
    this._location.back();
  }

  comment(comment:string, id: string){
    let newComment = {
      "id": (++this.count).toString(),
      "movieId": id,
      "comment": comment
    }
    this._CommentService.addComment(newComment).subscribe({
      next: () => {
        alert("Comment Added Successfully")
        
      },
      error: (err) => console.log(err)
    })
  }
}
