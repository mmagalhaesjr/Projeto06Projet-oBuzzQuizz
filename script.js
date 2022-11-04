// CÓDIGO DO MARCOS PARA A PAGINA DE CRIAÇÃO DE QUIZZ
let tituloNovoQuiz;
let imgNovoQuiz;
let qtdPerguntasNovoQuiz;
let qtdNiveisNovoQuiz;

function renderizarPagina1CriacaoQuizz() {
  let conteudo = document.querySelector('main');
  conteudo.innerHTML = `  <h2>Comece pelo começo</h2>
    <form >
        <div class="criandoQuiz">
            <input type="text" placeholder="Título do seu quizz"  name="" id="tituloNovoQuiz" minlength="20" maxlength="65" value="" required>
            <input type="url" placeholder="URL da imagem do seu quizz"name="" id="imgNovoQuiz">
            <input type="number" placeholder="Quantidade de perguntas do quizz"name="" id="qtdPerguntasNovoQuiz" min="3">
            <input type="text" placeholder="Quantidade de níveis do quizz"name="" id="qtdNiveisNovoQuiz" min="2">
        </div>
        <button onclick="renderizarPagina2CriacaoQuizz()">Prosseguir pra criar perguntas</button>    
    </form>`
    }

function renderizarPagina2CriacaoQuizz() {
    tituloNovoQuiz = document.querySelector('#tituloNovoQuiz').value;
    imgNovoQuiz = document.querySelector('#imgNovoQuiz').value;
    qtdPerguntasNovoQuiz = document.querySelector('#qtdPerguntasNovoQuiz').value;
    qtdNiveisNovoQuiz = document.querySelector('#qtdNiveisNovoQuiz').value;

    let conteudo = document.querySelector('main');
    conteudo.innerHTML= `<h2>Crie suas perguntas</h2>`;
    
    for(let i = 0; i < qtdPerguntasNovoQuiz; i++ ){
        conteudo.innerHTML +=
        `<section class="criandoQuiz">
            <div class="criandoQuizFechada">
                <h3>Pergunta ${[i+1]}</h3>
                <img onclick="expandirForm(this)" src="icones/vetorEditar.svg" alt="">
            </div>

            <div class="expandido escondido">
            <h3>Pergunta ${[i+1]}</h3>
                <div> 
                    <input type="text" placeholder="Texto da pergunta" name="" id="" minlength="20">
                    <input type="text" placeholder="Cor de fundo da pergunta"name="" id="">
                </div>
                <h3>Resposta correta</h3>
                <div>
                    <input type="text" placeholder="Resposta correta"name="" id="" minlength="1">
                    <input type="text" placeholder="URL da imagem"name="" id="">
                </div>
                <h3>Respostas incorretas</h3>
                <div class="respostasIncorretas">
                    <div>
                        <input type="text" placeholder="Resposta incorreta 1"name="" id="">
                        <input type="text" placeholder="URL da imagem 1"name="" id="">
                    </div>
                    <div>
                        <input type="text" placeholder="Resposta incorreta 2"name="" id="">
                        <input type="text" placeholder="URL da imagem 2"name="" id="">
                    </div>
                    <div>
                        <input type="text" placeholder="Resposta incorreta 3"name="" id="">
                        <input type="text" placeholder="URL da imagem 3"name="" id="">
                    </div>
            </div>
            </div>
        </section>`
    }
    conteudo.innerHTML+=`<button onclick="renderizarPagina3CriacaoQuizz()" >Prosseguir pra criar níveis</button>`
}

function expandirForm(select){
    let pai = select.parentNode;
    pai.classList.add('escondido');
    let divExpandida = pai.parentNode.querySelector('.expandido');
    divExpandida.classList.remove('escondido');
}

function renderizarPagina3CriacaoQuizz() {
    let conteudo = document.querySelector('main');
    conteudo.innerHTML= '';
    conteudo.innerHTML=`<h2>Agora, decida os níveis</h2>`
    for(let i =0; i < qtdNiveisNovoQuiz;i++ ){
          conteudo.innerHTML+=`
      <section class="criandoQuiz">
          <div class="criandoQuizFechada">
              <h3>Nível ${[i+1]}</h3>
              <img onclick="expandirForm(this)" src="icones/vetorEditar.svg" alt="">
          </div>

          <div class="expandido escondido">
          <h3>Nivel ${[i+1]}</h3>
          <input type="text" placeholder="Título do nível"  name="" id="">
          <input type="text" placeholder="% de acerto mínima"name="" id="">
          <input type="text" placeholder="URL da imagem do nível"name="" id="">
          <input type="text" placeholder="Descrição do nível"name="" id="">
          </div>
      </section>
      `
  }
    conteudo.innerHTML+= `<button onclick="renderizarPagina4CriacaoQuizz()">Prosseguir pra criar perguntas</button>`
}
    

function renderizarPagina4CriacaoQuizz() {
  let conteudo = document.querySelector('main');
 
  conteudo.innerHTML = `<h2>Seu quizz está pronto!</h2>
    <section>
        <img class="imagemFinal" src="${imgNovoQuiz}" alt="">
        <p></p>
    </section>
    <button>Acessar Quizz</button>
    <p onclick="window.location.reload();">Voltar pra home</p>`
}

// CÓDIGO DO DANILO PARA A PAGINA INICIAL

const quizzesContainer = document.querySelector('.quizzes-container');
const myQuizzes = document.querySelector('.myQuizzes');

function createQuizz() {
  // AQUI É O LINK ENTRE OS SCRIPTS. UMA FUNÇÃO CHAMA A OUTRA
  renderizarPagina1CriacaoQuizz();
};

function buildMyQuizzes(quizzesArray) {
  const noQuizzesText = 'Você não criou nenhum quizz ainda :(';
  const noQuizzes = document.createElement('p');
  const createQuizzButton = document.createElement('button');

  noQuizzes.innerHTML = noQuizzesText;
  createQuizzButton.innerHTML = 'Criar Quizz';

  createQuizzButton.addEventListener('click', createQuizz);

  noQuizzes.classList.add('noQuizzes');
  createQuizzButton.classList.add('createQuizzButton');

  myQuizzes.append(noQuizzes);
  myQuizzes.append(createQuizzButton);
};

function buildQuizzes(quizzesArray) {
  quizzesArray.map(({ id, title, image, questions, levels }) => {
    const card = document.createElement('div');
    const cardTittle = document.createElement('figCaption');
    const imageContainer = document.createElement('figure');
    const cardImage = document.createElement('img');

    card.id = id;
    card.classList.add('card');
    cardImage.src = image;
    cardTittle.innerHTML = title;

    card.append(imageContainer);
    imageContainer.append(cardImage);
    imageContainer.append(cardTittle);
    quizzesContainer.append(card);
  });
};

function getQuizzes() {
  const URL = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes';

  const promisse = axios.get(URL);
  promisse.then(({ data: data }) => {
    buildQuizzes(data);
    buildMyQuizzes(data);
  }).catch((error) => console.log(error.message));
};

window.addEventListener('load', getQuizzes);