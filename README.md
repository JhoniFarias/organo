# Organo

Organo é uma aplicação web desenvolvida em Angular 19 para organizar e visualizar livros por gêneros literários. O projeto demonstra o uso de recursos modernos do Angular, incluindo componentes standalone, diretivas estruturais avançadas e tipagem aprimorada.

## Sobre o Projeto

O Organo permite que usuários visualizem uma lista de livros agrupados por gênero, com destaque visual para cada categoria. É possível marcar livros como favoritos, e o layout é responsivo e moderno, utilizando CSS custom properties e boas práticas de componentização.

## Funcionalidades

- Listagem de livros agrupados por gênero literário
- Marcação de livros como favoritos
- Componentização modular e reutilizável
- Layout responsivo e estilização customizada
- Uso de imagens locais e remotas para capas de livros

## Recursos do Angular 19 Utilizados

Este projeto faz uso dos principais recursos introduzidos ou aprimorados no Angular 19:

- **Componentes Standalone:** Todos os componentes (`AppComponent`, `CabecalhoComponent`, `RodapeComponent`, `ListaLivrosComponent`, `GeneroLiterarioComponent`, `LivroComponent`) são standalone, dispensando a necessidade de módulos NgModule.
- **Diretivas estruturais @for e @if:** Utilização das novas diretivas estruturais reativas para renderização condicional e iteração em templates, proporcionando melhor performance e legibilidade.
- **Input Signals:** Uso do novo decorator `input` para propriedades de entrada, permitindo reatividade aprimorada e integração com signals.
- **Configuração simplificada de rotas:** Uso do `provideRouter` diretamente na configuração da aplicação.
- **Zone-Less Change Detection:** Configuração de detecção de mudanças com `provideZoneChangeDetection`, otimizando a performance.
- **Strict Typing:** Projeto configurado com tipagem estrita no TypeScript e Angular, aumentando a segurança e robustez do código.

## Como executar o servidor de desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute:

```bash
ng serve
```

Depois, acesse [http://localhost:4200/](http://localhost:4200/) no navegador. O aplicativo será recarregado automaticamente a cada alteração nos arquivos fonte.

## Gerando componentes

Para criar um novo componente standalone, utilize:

```bash
ng generate component component-name --standalone
```

Para ver todos os schematics disponíveis:

```bash
ng generate --help
```

## Build

Para compilar o projeto:

```bash
ng build
```

Os artefatos serão gerados na pasta `dist/`.

## Testes unitários

Para rodar os testes unitários com o Karma:

```bash
ng test
```

## Recursos adicionais

- [Documentação Angular CLI](https://angular.dev/tools/cli)
- [Novidades do Angular 19](https://blog.angular.io/angular-v19-is-now-available-6b7a2c0b2c4e)
