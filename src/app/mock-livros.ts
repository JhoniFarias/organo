import { Livro } from './componentes/livro/livro';

export const livros: Livro[] = [
  {
    titulo: 'O poder do hábito',
    autoria: 'Charles Duhigg',
    imagem: 'livro.jpg',
    favorito: false,
    genero: {
      id: 'autoajuda',
      value: 'Autoajuda',
      livros: [],
    },
  },
  // {
  //   titulo: 'O homem mais rico da Babilônia',
  //   autoria: 'George S Clason',
  //   imagem:
  //     'https://m.media-amazon.com/images/I/81ehX6Quw2L._AC_UF1000,1000_QL80_.jpg',
  //   favorito: false,
  //   genero: {
  //     id: 2,
  //     value: 'Finanças',
  //     livros: [],
  //   },
  // },
  {
    titulo: 'A mágica da arrumação',
    autoria: 'Marie Kondo',
    imagem: 'https://m.media-amazon.com/images/I/81HKBLcErZL.jpg',
    favorito: false,
    genero: {
      id: 'contos',
      value: 'Contos',
      livros: [],
    },
  },
  {
    titulo: 'O homem mais rico da Babilônia',
    autoria: 'George S Clason',
    imagem:
      'https://m.media-amazon.com/images/I/81ehX6Quw2L._AC_UF1000,1000_QL80_.jpg',
    favorito: false,
    genero: {
      id: 'contos',
      value: 'Contos',
      livros: [],
    },
  },
  {
    titulo: 'A arte da guerra',
    autoria: 'Sun Tzu',
    imagem:
      'https://cdn.record.com.br/wp-content/uploads/2020/08/25160527/14764-600x922.jpeg',
    favorito: false,
    genero: {
      id: 'ficcao',
      value: 'Ficção',
      livros: [],
    },
  },

  {
    titulo: 'A arte da guerra',
    autoria: 'Sun Tzu',
    imagem:
      'https://cdn.record.com.br/wp-content/uploads/2020/08/25160527/14764-600x922.jpeg',
    favorito: false,
    genero: {
      id: 'autoajuda',
      value: 'Autoajuda',
      livros: [],
    },
  },
];
