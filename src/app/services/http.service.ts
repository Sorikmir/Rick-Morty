import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CharacterResponse {
  info: PaginationInfo;
  results: Character[];
}

export interface PaginationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationInfo;
  location: LocationInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationInfo {
  name: string;
  url: string;
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_URL : string = 'https://rickandmortyapi.com/api/character'

  
  constructor(public http: HttpClient) { }

  getAllCharacters() {
    return this.http.get(this.API_URL);
  }
}
