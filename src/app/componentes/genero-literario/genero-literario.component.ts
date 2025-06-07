import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { livros } from '../../mock-livros';
import { GeneroLiterario } from '../livro/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css',
  imports: [LivroComponent, CommonModule],
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
