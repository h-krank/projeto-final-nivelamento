/*

1- Variáveis e constantes são formas de armazenar dados de forma que podem ser acessados por um nome.
variáveis podem ter o seu valor alterado, enquanto constantes permanecem o mesmo desde sua criação.

Em um programa pra verificar se o usuário é maior de idade, você poderia ter uma constante para
definir a maior idade, pois esse valor não se altera

const maiorIdade = 18;

Enquanto para a idade que o usuário vai inserir você usaria uma variável, pois o valor muda dependendo
do que o usuário inserir

var idade = parseInt(prompt('Insira sua idade));

2-Comandos de decisão são uma forma de tornar o programa mais complexo, podendo criar condições
a serem seguidas e decisões a serem tomadas dependendo delas, com operadores como if, else e o switch case

Usando o exemplo anterior, if e else poderiam ser usados da seguinte forma:

if (idade < maiorIdade){
    console.log("Você é menor de idade")
}
else{
    console.log("Você é maior de idade")
}

3- Loops são uma forma de executar um mesmo código diversas vezes, criando um laço de repetição.
Exemplos de loops são for (e suas variações for in e for of) e while (e sua variação do while).
Um loop pode ser usado, por exemplo para criar uma tabuada

var numeroASerMutiplicado = 5
var quantasVezes = 10

for (var i = 0; i < quantasVezes; i++){
    console.log(i * numeroASerMultiplicado)
}

4-Funções são uma forma de armazenar código que pode ser utilizado no futuro, podendo assim evitar
repetições desnecessárias da mesma coisa em vários lugares do código.
Se eu preciso usar o código do de maiorIdade anterior várias vezes durante o meu programa eu posso
simplesmente colocalo dentro de uma função verificarIdade(), assim sempre que necessário a função
pode ser chamada

function verificarIdade(){
    if (idade < maiorIdade){
        console.log("Você é menor de idade")
    }
    else{
        console.log("Você é maior de idade")
    }
}

5-Escopos são a abrangência de alguma coisa no código. Escopos podem ser globais, que valem para todo
o código, ou locais, valendo apenas para um trecho dele. No código do exercicio 3, repetido abaixo,
as váriaveis numeroASerMultiplicado e quantasVezes são globais e podem ser acessadas de qualquer lugar.
Por outro lado, a variável i, criada dentro do loop for, é local e só pode ser acesseda dentro dele.
Após a execução desse código, ela não é mais acessivel

var numeroASerMutiplicado = 5
var quantasVezes = 10

//Aqui o i não existe
for (var i = 0; i < quantasVezes; i++){
    //Aqui o i existe
    console.log(i * numeroASerMultiplicado)
}
//Aqui o i não existe

6-Inputs são formas de obter informações inseridas pelos usuários, exemplos de input são o prompt() no JS,
ou até mesmo um formulário ou qualquer caixa onde o usuário pode digitar no HTML.
Outputs por outro lado são responsáveis por mostrar informações para o usuário. Outputs como console.log(),
document.write() ou alert() mostram, de forma diferentes alguma informação na tela.

7- Arrays são uma outra estrutura de dados, em forma de lista, que armazena uma sequência de itens indexada a partir do 0.
Arrays podem ser usados por exemplo para armazenar uma lista de nomes em uma sala de aula.

var alunos = ['Fulano', 'Ciclano', 'Beltrano']

Para acessar o primeiro elemento utiliza-se alunos[0], o segundo alunos[1] e assim por diante

8-Obejetos são uma estrutura de dados mais complexa, que permite dar atributos aos seus itens, que podem ser acessados posteriormente
Na lista de alunos anterior, apenas os nomes de cada um fica armazenado, mas um individuo tem mais informações do que apenas o nome.
Criando um objeto para representar uma pessoa eu poderia ter algo como:

var pessoa {
    nome: 'Fulano'
    idade: 30
    sexo: 'M'
}

Ou qualquer outro atributo que eu queira dar para a pessoa, podendo ser facilmente acessado depois com pessoa.nome por exemplo
para obter a propriedade nome do objeto

9- camelCase, PascalCase, kebab-case e snake_case são formas diferentes de escrever palavras, usadas em diversas linguagens de programação.
Em camelCase, a primeira palavra começa com letra minuscula, e todas a outras são escritas juntas, com a primeira letra maiuscula.
Em PascalCase, todas as palavras são escritas juntas, com a primeira letra de cada palavra em maiusculo
Em kebab-case, todas as letras são minusculas, mas as palavras são separadas por um -
Em snake_case, todas as letras são minusculas, mas as palavras são separadas por um _

10- Caminho absoluto é o caminho completo de um arquivo, enquanto caminho relativo é o caminho até um outro arquivo,
a partir do ponto atual.
Um caminho absoluto para um arquivo no meu desktop por exemplo seria:

/home/krank/Desktop/arquivo

Porém, como o caminho para um arquivo é diferente, por causa de coisas como nome de usuário ou onde a pessoa armazena, 
se eu preciso que o meu programa utilize outros arquivos, é melhor usar um arquivo relativo, que começa a partir do ponto atual.
Portanto, se eu tenho um projeto e quero acessar outro arquivo na mesma pasta, eu posso usar um caminho relativo.

./arquivo

11- &&, ||, == e != são operadores lógicos, usados para comparar e avaliar condições.
&& é utilizado quando eu quero que as duas condições sejam verdadeiras, para algo ser verdade.
Se uma delas for falsa, a condição como um todo retorna falso.

if (2 > 1 && 5 > 2){
    //Código será executado
}
if (2 > 1 && 5 < 2){
    //Código não será executado
}

|| é quando eu quero que uma ou outra condição seja verdadeira. Apenas uma das minhas condiçõe precisa ser verdadeira
para o resultado final ser verdadeiro 


if (2 > 1 || 5 > 2){
    //Código será executado
}
if (2 > 1 || 5 < 2){
    //Código  será executado
}

== é um comparado de igualdade. Serve para verificar se uma coisa é igual a outra

if (1 == 1){
    //Código será executado
}
if (1 == 2){
    //Código não será executado
}

!= é semelhante ao anterior, porém serve para verificar se uma condição é diferente da outra
if (1 != 1){
    //Código não será executado
}
if (1 != 2){
    //Código será executado
}

12- EPER é uma sigla que significa Entender, Planejar, Executar e Revisar. É uma filosofia para se
preparar antes de executar uma tarefa, para não fazer tudo de qualquer jeito

13- Pilha e fila são duas formas diferentes de descrever arrays. Fila é quando o primeiro item a entrar
é também o primeiro a sair. Pilha é quando o primeiro item a entrar é o ultimo a sair.

meyArray.shift() retiraria o primeiro item primeiro, formando assim uma fila.
[1,2,3,4,5] retornaria em ordem 1, 2, 3 e assim por diante.

Utilizando meuArray.pop(), o array se comportaria como pilha, com os primeiros items saindo por ultimo.
Assim, ele retornaria 5, 4, 3 e assim por diante

14- No contexto de um site:
HTML seria como o esqueleto, dando a estrutura geral do site.
CSS seria os musculos, a pele, o cabelo, que deixam o site mais bonito.
JS seria como os orgãos, que dão vida e fazem tudo funcionar

*/
