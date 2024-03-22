export interface ObtenerUsuariosReponse {
  data: IUsuario;
  support: Support;
}

export interface IUsuario {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export class Usuario implements IUsuario {
  constructor(
    public id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string,
    public aprobado: boolean
  ) {}

  iniciarSesion(): void {}

  editarEmail(): void {}

  alternarAprobado(): void {
    this.aprobado = !this.aprobado;
  }
}

function obtenerUsuario(uid: number) {
  const respuesta: ObtenerUsuariosReponse = {
    data: {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg',
    },
    support: {
      url: 'https://reqres.in/#support-heading',
      text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
    },
  };

  const { id, avatar, email, first_name, last_name } = respuesta.data;

  const usuario = new Usuario(id, email, first_name, last_name, avatar, true);

  usuario.editarEmail();
  usuario.iniciarSesion();
}
