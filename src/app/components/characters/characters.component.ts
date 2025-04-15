import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character, CharacterResponse, HttpService } from '../../services/http.service';
import { Subscription } from 'rxjs';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters',
  imports: [NgForOf, RouterLink],
  standalone: true,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit, OnDestroy{
  sub: Subscription | undefined;
  characters: Character[]=[];
  constructor(public http : HttpService ){
    }
  ngOnInit(): void {
    this.sub = this.http.getAllCharacters().subscribe(
      //@ts-ignore
      (response: CharacterResponse) => {
         this.characters = response.results;
      }
    )
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  

}
