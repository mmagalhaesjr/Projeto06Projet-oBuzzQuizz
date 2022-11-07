//Pagina 2
alert("Pag2");

/*var globais*/
const apiBuzzQuizz = "https://mock-api.driven.com.br/api/v4/buzzquizz/";

let quizzList = []; //Armazena todos os quizzes fornecidos
let quizzSelecionado = {}; //colocar infos do quizz escolhido
let quantidadePerguntas; //numero de perguntas do quizz selecionado (Number)

let acertos; //acertos do usuário

let idQuizz;
let imageUrl = "";
let nivel = {};
let perguntas = {};
let titulo = "";
/*programa*/

buscarQuizzes(); //puxa todas as informações da API (todos os quizzes)

/*fim do programa*/

/*functions*/

//misturar "aleatóriamente" os cards
function comparador() {
  return Math.random() - 0.5;
}

function buscarQuizzes() {
  const promise = axios.get(`${apiBuzzQuizz}quizzes`);
  console.log("Pedido de quizz enviado");
  promise.then(function (resposta) {
    quizzList = resposta.data;
    console.log(quizzList); //apagar

    //puxar da pg1 o id do quizz escolhido
    renderizarQuizz(quizzList[01].id); //ex teste trocar para o id certo
    return;
  });

  promise.catch(function (erro) {
    alert("Erro ao carregar quizzes da API");
    console.log(erro.response.status);
  });
}

function renderizarQuizz(id) {
  //filtrar os dados do id selecionado
  quizzSelecionado = quizzList.filter((quizz) => quizz.id === id)[0];
  console.log(quizzSelecionado); //apagar

  //obter numero de perguntas referente ao quizz selecionado
  quantidadePerguntas = quizzSelecionado.questions.length;
  console.log(quantidadePerguntas); //apagar

  //obter title
  titulo = quizzSelecionado.title;
  console.log(titulo); // titulo h2

  //obter url imagem topo
  imageUrl = quizzSelecionado.image;
  console.log(imageUrl); // url imagem topo

  //renderizar quizz
  //renderizar topo
  renderizarTopo();

  /*renderizar quizz selecionado*/
  renderizarPerguntas();

  /*end renderizar quizz selecionado*/

  //renderizar finalizção só depois de de todas as respostas serem selecionadas
  renderizarFinalizacao();
  return;
}

/*renderizar topo*/
function renderizarTopo() {
  const topoPg2 = document.querySelector(".imagemTopoPg2");
  //1° limpar conteudo do container
  topoPg2.innerHTML = "";
  topoPg2.innerHTML += `<img src="${imageUrl}" alt="">
      <h2>${titulo}</h2>`;
}

/*end renderizar topo*/
function renderizarPerguntas() {
  console.log(quizzSelecionado);
  let containerQuizzSelecionado = document.querySelector(".cards-quest-box");
  containerQuizzSelecionado.innerHTML = "";

  let perguntasList = quizzSelecionado.questions;
  console.log(perguntasList); //lista das perguntas do quizz selecionado
  console.log(perguntasListçlength);
  let opcoesResposta = document.querySelector(".card");
  opcoesResposta.innerHTML = "";
  let title = perguntasList.title[0];
  console.log(title);
  for (let i = 0; i < perguntasList.length; i++) {
    containerQuizzSelecionado.innerHTML += `<ul id="card-quest-list">
		<li id="card-quest1">
			<div class="card">

			</div>
		</li>
	</ul>`;
  }

  for (let j = 0; j < 4; j++) {
    opcoesResposta.innerHTML += `<div class="quest">
					<h3>${perguntasList.title[j]}</h3>
				</div>

				<ul class="card-itens" onclick="mudarOpacity()" id="quest1">

					<li class="custom-radiobox alternativa">
						<input type="radio" name="resposta-selecionada" id="op1">
						<label for="op1">
							<div class="img-op" id="img1">
								<img src="${answer.image[j]}" alt="">
							</div>
							<p>${answer.text[j]}</p>
						</label>

					</li>

				</ul>`;
  }
}

function calcularResultado() {
  //comparar as respostas esperadas com as respostas obtidas
  //total -> 100%
  //acertos -> x%

  renderizarFinalizacao();
}

//colocar as variáveis referentes
function renderizarFinalizacao() {
  const cardFinalizacao = document.querySelector(".card-finalizacao");
  //1° limpar conteudo do container
  cardFinalizacao.innerHTML = "";
  cardFinalizacao.innerHTML += `<section class="topo-card-finalizacao">
	<div class="titulo-finalizacao">
		<h3>${88}% de acerto:${vocêépraticamenteumalunodeHogwarts}</h3>
	</div>
</section>

<section class="body-finalizacao">
	<div id="image-finalizacao">
		<img src="${assets / dumbledore.png}" alt="imagem card finalização">
	</div>
	<div class="texto-finalizacao">
		<p>${ParabénsPotterhead}</p>
	</div>
</section>`;
}

//Reiniciar quizz
function reiniciaQuizz() {
  //quandoo solicitado apaga as informações do card-finalizacao e oculta"

  //limpa as resposta selecionadas no quizz atualizando a página
  location.reload();

  //scrola de volta para o topo da tela
  let topo = document.querySelector(".imagemTopoPg2");
  topo.scrollIntoView();
}

/*formato recebido pela API

[
	{
		id: 1,
		title: "Título do quizz",
		image: "https://http.cat/411.jpg",
		questions: [
			{
				title: "Título da pergunta 1",
				color: "#123456",
				answers: [
					{
						text: "Texto da resposta 1",
						image: "https://http.cat/411.jpg",
						isCorrectAnswer: true
					},
					{
						text: "Texto da resposta 2",
						image: "https://http.cat/412.jpg",
						isCorrectAnswer: false
					}
				]
			},
			{
				title: "Título da pergunta 2",
				color: "#123456",
				answers: [
					{
						text: "Texto da resposta 1",
						image: "https://http.cat/411.jpg",
						isCorrectAnswer: true
					},
					{
						text: "Texto da resposta 2",
						image: "https://http.cat/412.jpg",
						isCorrectAnswer: false
					}
				]
			},
			{
				title: "Título da pergunta 3",
				color: "#123456",
				answers: [
					{
						text: "Texto da resposta 1",
						image: "https://http.cat/411.jpg",
						isCorrectAnswer: true
					},
					{
						text: "Texto da resposta 2",
						image: "https://http.cat/412.jpg",
						isCorrectAnswer: false
					}
				]
			}
		],
		levels: [
			{
				title: "Título do nível 1",
				image: "https://http.cat/411.jpg",
				text: "Descrição do nível 1",
				minValue: 0
			},
			{
				title: "Título do nível 2",
				image: "https://http.cat/412.jpg",
				text: "Descrição do nível 2",
				minValue: 50
			}
		]
	}
]
*/
/*
function mudarOpacity() {
  document.getElementById("quest1").style.opacity = "0.5";
  document.getElementsByName("resposta-selecionada").style.opacity = "0.5";
  return;
}
*/
