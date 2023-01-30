# Prova de conhecimentos de HTML, CSS e Bootstrap.

  

## 1. Quantos níveis de cabeçalho HTML (headers) existem?

6 níveis

 
## 2. O que está errado no código HTML abaixo?

<p style"font-size:10px;">Copyright <span>2015</span></p>

  

A forma correta é:

  

<p style="font-size:10px">Copyright <span>2015</span></p>

  

  

## 3. Qual elemento em HTML5 representa uma oportunidade de quebra de linha?
O elemento     `</br>`

  

## 4. Qual elemento HTML pode ser usado para expressar e mostrar uma anotação de uma pronuncia de um caractere do leste asiático?

  O elemento     `<ruby>`

## 5. Por que não devemos usar fontes de tamanho fixo?
Existem boas práticas de acessibilidade e responsividade que são prejudicadas quando não se utiliza medidas relativas para as fontes.

  

## 6. Quais fontes estão disponíveis em todas as plataformas?

  As fontes são Arial, Verdana, Tahoma, Trebuchet MS, Times New Roman, Georgia, Garamond, Courier New, Brush Script MT

  

## 7. Explique a diferença entre: visibility:hidden and display:none

  **visibility:hidden** deixa os aspectos visuais do elemento não visíveis, porem o elemento ainda ira ocupar um espaço na estrutura dumento do DOM, já a propriedade **display:none**, removerá o elemento do DOM.

  

## 8. O que são CSS media queries e para que são usadas?
As media queries são formas de mudar atributos CSS, conforme alguma condição específica, relativa ao acesso do usuário a pagina web, podemos usar as media queries para criar layouts responsivos é para estilizar elementos conforme as interações do usuário
  

## 9. Dado o HTML abaixo:

Temos a seguinte saída: 

![enter image description here](https://i.ibb.co/KWxmPm1/screencapture-127-0-0-1-5500-index-html-2023-01-30-12-26-38.png)

  

  

## 10. Qual é o comando “at-rule” que permite o use de “encoding” em uma stylesheet?

  O comando `@charset`

  

## 11. Por que usar Bootstrap?

  O Bootstrap, possibilita a criação de interfaces de um jeito muito mais fácil, padronizado, responsivo e que siga as boas práticas de desenvolvimento.

  

## 12. Como fazer para deixar imagens responsivas?
Adicionando o seguinte estilo

    img {
    width: 100%;
    height: auto;
    }

  

  

## 13. O que são glyphicons?

  glyphicons são a forma padrão de se utilizar ícones no bootstrap

  

## 14. O que é um Jumbotron em Bootstrap?

  Jumbotron é um componente do Bootstrap que se utiliza quando você quer que seu elemento ocupe a largura do seu viewport inteira

  

## 15. O que são “media objects” no BootStrap?
São componentes usados quando se é necessário associar alguma mídia com algum outro conteúdo que não envolva essa mídia, como, por exemplo, comentários com fotos ou tweets
  

  

## 16. O que é React?

  React é uma biblioteca para criação e gerenciamento de interfaces reativamente.

  

## 17. O que é JSX?

  JSX é uma extensão de sintaxe do javascript, que exibe uma sintaxe que lembre tanto a sintaxe do javascript quando a de uma linguagem de template

  

## 18. Como o React é diferente do Angular?

  Podemos citar como diferenças:

-   React é um biblioteca e Angular um Framework
    
-   React utiliza o DOM virtual é react o DOM real
    
-   React tem vinculação unidirecional dos dados, enquanto angular tem vinculação bidirecional
    
-   React permite a escolha de diferentes biblioteca de arquitetura e ferramentas diferente do Angular
    
-   React tem um modelo baseado no DOM virtual é react tem o modelo Baseado em MVC

## 19. O que é Redux?

  Redux é uma biblioteca de armazenamento e gerenciamento de estados

  

## 20. Quais são as vantagens do Redux?
Redux, remove a responsabilidade de gerenciamento dos estados do componente, centralizando essa função e possibilitando o acesso a todos os componentes de forma centralizada
  

## 21. Monte um programa que use ReactJS que tenha as seguintes funcionalidades:

Solução disponivel neste repositorio: 
https://github.com/ermsharo/FormValidation