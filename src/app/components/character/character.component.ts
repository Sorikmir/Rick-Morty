import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Character, CharacterResponse, HttpService } from '../../services/http.service';

@Component({
  selector: 'app-character',
  imports: [
    AsyncPipe
],
  templateUrl: './character.component.html',
  standalone: true,
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {
  private character = new BehaviorSubject<Character | null>(null);
  // @ts-ignore
  character$: Observable<Character> = this.character.asObservable();


  sub: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    ) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.sub = this.httpService.getAllCharacters().subscribe(
          // @ts-ignore
          (response: CharacterResponse) => {
            const character = response.results.find(
              result => {
                // @ts-ignore
                return result.id == params.id
              }
            );
            // @ts-ignore
            this.character.next(character)
          }
        )
      }
    )
  }
}
