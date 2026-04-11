# Roleta da Discordia

Projeto simples de roleta com animação e painel de informações. O objetivo é exibir todas as opções ao mesmo tempo e mostrar qual item foi sorteado.

## Estrutura do projeto

- `index.html` - define a estrutura da página e inclui o CSS e o JavaScript.
- `style.css` - controla o layout, cores e o visual da roleta e do painel.
- `script.js` - gera a roleta, controla a lógica de sorteio e atualiza o resultado.

## Como usar

1. Abra o arquivo `index.html` em um navegador.
2. Clique no botão **Girar**.
3. A roleta gira e o resultado aparece embaixo do botão.
4. A lista de opções no painel direito mostra todas as opções e destaca a escolhida.

## Detalhes do `index.html`

A página contém:

- `<div class="container">` - envoltório principal.
- `<div class="content">` - organiza duas colunas: roleta e painel de informações.
- `<div class="roleta-column">` - coluna que mostra a roleta, o botão e o resultado.
- `<div class="roleta-wrapper">` - caixa que define o tamanho da roleta.
- `<div id="roleta"></div>` - elemento que recebe o fundo em gradiente para parecer a roleta.
- `<div class="centro">Teen.</div>` - círculo central da roleta.
- `<button id="girar">Girar</button>` - dispara o sorteio.
- `<p id="resultado"></p>` - exibe o item sorteado.
- `<div class="info-panel">` - painel com a lista de opções que o usuário vê ao mesmo tempo.

## Detalhes do `style.css`

As principais partes do estilo são:

- `body` - ocupa toda a altura da tela e centraliza o conteúdo.
- `.content` - usa `grid` para posicionar a roleta e o painel lado a lado.
- `.roleta-wrapper` - define que a roleta deve ocupar até `70vw`, com limite máximo de `600px`.
- `#roleta` - recebe o fundo em `conic-gradient` e anima a rotação.
- `.centro` - círculo central com estilo de destaque.
- `.info-panel` - painel com fundo translúcido e borda suave.
- `#lista-opcoes` - mostra as opções em uma lista organizada.
- `li.active` - destaca a opção sorteada após o giro.

## Detalhes do `script.js`

### Variáveis principais

- `roleta` - elemento HTML que representa o disco da roleta.
- `resultado` - local onde o texto do resultado é mostrado.
- `girarBtn` - botão que inicia o giro.
- `listaOpcoes` - elemento `<ul>` que exibe as opções.
- `opcoes` - array que contém todos os textos disponíveis na roleta.

### Função `desenharRoleta()`

Gera o visual da roleta aplicando um gradiente cônico (`conic-gradient`) no elemento `#roleta`.
Cada opção recebe uma faixa de cor com base no seu índice.

### Função `renderizarLista()`

Cria itens `<li>` dentro de `#lista-opcoes` para cada valor do array `opcoes`.
Essa lista fica sempre visível, mostrando ao usuário todas as opções.

### Função `limparAtivo()`

Remove a classe `active` de todos os itens da lista para que apenas o item sorteado fique destacado depois.

### Evento de clique no botão

Quando o usuário clica em `girar`:

1. Um índice aleatório é escolhido a partir do array `opcoes`.
2. Calcula-se o ângulo de rotação para a roleta.
3. A roleta recebe o `transform: rotate(...)` para animar o giro.
4. Após 4 segundos, o texto do resultado é atualizado.
5. O item correspondente na lista de opções recebe a classe `active`.

## Como alterar as opções

Para mudar o que está na roleta, edite o array `opcoes` em `script.js`:

```js
const opcoes = [
  "N8N",
  "Expo",
  "React",
  "Criar algo que nem existe com IA's",
  "Projeto Python",
  "Projeto com Arduino",
  "Projeto Python",
  "Projeto Python"
];
```

Adicione, remova ou altere textos aqui. A roleta e a lista de informações serão atualizadas automaticamente.

## Como personalizar o visual

- Para mudar as cores da roleta, ajuste `background` em `#roleta` ou altere a lógica de `desenharRoleta()`.
- Para alterar o tamanho da roleta, edite `.roleta-wrapper`.
- Para mudar a aparência do painel, edite `.info-panel` e os estilos de `li`.

## Como ampliar o projeto

Algumas ideias de melhoria:

- exibir os nomes também diretamente sobre a roleta;
- usar HTML dinâmico para gerar segmentos com texto;
- permitir que o usuário insira novas opções via formulário;
- adicionar efeitos sonoros quando a roleta gira;
- alterar o número de voltas ou a velocidade da rotação.

## Observações

- O arquivo `index.html` carrega `style.css` e `script.js`.
- `script.js` precisa ser carregado depois do HTML para que os elementos existam.
- A lista de opções é gerada automaticamente a partir do mesmo array usado para o sorteio.
