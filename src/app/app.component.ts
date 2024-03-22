import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { Usuario } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // ok
  }

  title = 'afterclass-01-typescript';

  esValido: boolean = true;
  nombre = 'Jorge';
  edad = 20;
  frutas: string[] = ['Manzana', 'Naranja', 'Frutilla'];
  array1: (number | string | boolean)[] = [20, 40, 'Argentina', false];
  // array1: [number, number, string, boolean, number] = [20, 40, 'Argentina', false, 50];
  array2: (number | string[] | boolean)[] = [
    40,
    ['Jupiter', 'Saturno', 'Urano'],
    true,
  ];

  usuarios: Usuario[] = [
    new Usuario(
      1,
      'michael.lawson@reqres.in',
      'Michael',
      'Lawson',
      'https://reqres.in/img/faces/7-image.jpg',
      true
    ),
    new Usuario(
      2,
      'michael.lawson@reqres.in',
      'Michael',
      'Lawson',
      'https://reqres.in/img/faces/7-image.jpg',
      false
    ),
    new Usuario(
      3,
      'michael.lawson@reqres.in',
      'Michael',
      'Lawson',
      'https://reqres.in/img/faces/7-image.jpg',
      true
    ),
  ];

  // pokemon: object = { nombre: 'Pikachu', poder: 'Electrico' };
  // pokemon: Pokemon = { nombre: 'Pikachu' };
}
