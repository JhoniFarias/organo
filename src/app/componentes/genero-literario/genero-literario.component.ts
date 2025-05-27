import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { livros } from '../../mock-livros';
import { GeneroLiterario } from '../livro/livro';

@Component({
  selector: 'app-genero-literario',
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css',
  imports: [LivroComponent],
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
