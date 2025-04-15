import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'characters',
        component: CharactersComponent
    },
    {
        path: 'characters/:id',
        component: CharacterComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
