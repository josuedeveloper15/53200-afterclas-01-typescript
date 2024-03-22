enum Poder {
  Electrico = 'electrico',
  Tierra = 'tierra',
  Agua = 'agua',
  Fuego = 'fuego',
}

export interface IPokemon {
  nombre: string;
  poder: string;
}

export class Pokemon implements IPokemon {
  nombre: string = '';
  poder: Poder;

  constructor(nombre: string, poder: Poder) {
    this.poder = poder;
  }

  atacar() {
    console.log(`${this.nombre} esta atancado!`);
  }
}

const pikachu = new Pokemon('Pikachu', Poder.Electrico);

// const charizar: Pokemon = {
//   nombre: 'Charizar',
//   poder: Poder.Fuego,
//   atacar() {
//     console.log(`${this.nombre} esta atancado!`);
//   }
// }

class Usuario {
  // id: number;
  // nombre: string;
  // dni: string;
  // contrasena: string;

  // constructor(
  //   id: number,
  //   nombre: string,
  //   dni: string,
  //   contrasena: string,
  // ) {
  //   this.id = id;
  //   this.nombre = nombre;
  //   this.dni = dni;
  //   this.contrasena = contrasena;
  // }

  constructor(
    public id: number,
    public nombre: string,
    public dni: string,
    private contrasena: string
  ) {}

  iniciarSesion() {}

  saludar(): void {}

  cambiarPassword(newPass: string): void {
    this.contrasena = newPass;
    console.log('Imaginen que envia un email...');
  }
}

const usuario1 = new Usuario(2, 'Naruto', '2323232', '123456');

// usuario1.contrasena = '89888877';
usuario1.cambiarPassword('12312321');
