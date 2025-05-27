import { Component, input, Input } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { GeneroLiterario as GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css',
  imports: [GeneroLiterarioComponent],
})
export class ListaLivrosComponent {
  livros = livros;
  generosLiterarios: GeneroLiterario[] = [];

  ngOnInit() {
    this.carregarLivrosAgrupadosPorGenero();
  }

  private carregarLivrosAgrupadosPorGenero() {
    let generos = this.livros.map((livro) => {
      return livro.genero.value;
    });
    generos = [...new Set(generos)];

    this.generosLiterarios = generos.map((genero, index) => {
      return {
        id: index,
        value: genero,
        livros: this.livros.filter((livro) => livro.genero.value === genero),
      };
    });
  }
}
