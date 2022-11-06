// CÓDIGO DO MARCOS PARA A PAGINA DE CRIAÇÃO DE QUIZZ
let tituloNovoQuiz;
let imgNovoQuiz;
let qtdPerguntasNovoQuiz;
let qtdNiveisNovoQuiz;
let quizData;

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
  getQuizInfo();
  tituloNovoQuiz = document.querySelector('#tituloNovoQuiz').value;
  imgNovoQuiz = document.querySelector('#imgNovoQuiz').value;
  qtdPerguntasNovoQuiz = document.querySelector('#qtdPerguntasNovoQuiz').value;
  qtdNiveisNovoQuiz = document.querySelector('#qtdNiveisNovoQuiz').value;

  let conteudo = document.querySelector('main');
  conteudo.innerHTML = `<h2>Crie suas perguntas</h2>`;

  for (let i = 0; i < qtdPerguntasNovoQuiz; i++) {
    conteudo.innerHTML +=
      `<section class="criandoQuiz">
            <div class="criandoQuizFechada">
                <h3>Pergunta ${[i + 1]}</h3>
                <img onclick="expandirForm(this)" src="icones/vetorEditar.svg" alt="">
            </div>

            <div class="expandido escondido">
            <h3>Pergunta ${[i + 1]}</h3>
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
  conteudo.innerHTML += `<button onclick="renderizarPagina3CriacaoQuizz()" >Prosseguir pra criar níveis</button>`
}

function expandirForm(select) {
  let pai = select.parentNode;
  pai.classList.add('escondido');
  let divExpandida = pai.parentNode.querySelector('.expandido');
  divExpandida.classList.remove('escondido');
}

function renderizarPagina3CriacaoQuizz() {
  getQuestions();
  let conteudo = document.querySelector('main');
  conteudo.innerHTML = '';
  conteudo.innerHTML = `<h2>Agora, decida os níveis</h2>`
  for (let i = 0; i < qtdNiveisNovoQuiz; i++) {
    conteudo.innerHTML += `
      <section class="criandoQuiz">
          <div class="criandoQuizFechada">
              <h3>Nível ${[i + 1]}</h3>
              <img onclick="expandirForm(this)" src="icones/vetorEditar.svg" alt="">
          </div>

          <div class="expandido escondido">
          <h3>Nivel ${[i + 1]}</h3>
          <input type="text" placeholder="Título do nível"  name="" id="">
          <input type="text" placeholder="% de acerto mínima"name="" id="">
          <input type="text" placeholder="URL da imagem do nível"name="" id="">
          <input type="text" placeholder="Descrição do nível"name="" id="">
          </div>
      </section>
      `
  }
  conteudo.innerHTML += `<button onclick="renderizarPagina4CriacaoQuizz()">Prosseguir pra criar perguntas</button>`
}


function renderizarPagina4CriacaoQuizz() {
  getLevels();
  let conteudo = document.querySelector('main');

  conteudo.innerHTML = `<h2>Seu quizz está pronto!</h2>
    <section>
        <img class="imagemFinal" src="${imgNovoQuiz}" alt="">
        <p></p>
    </section>
    <button>Acessar Quizz</button>
    <p onclick="window.location.reload();">Voltar pra home</p>`
}

// FUNÇÕES PARA COLETAR OS DADOS DOS QUIZES

function postQuizz(data) {
  const URL = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes';
  console.log(data)

  axios.post(URL, data).then(({ data }) => {
    // myQuizzesArray.push(id);
    const myQuizzesArray = JSON.parse(localStorage.getItem('myQuizzesArray')) || [];
    // console.log(myQuizzesArray, data.id, data)
    myQuizzesArray.push(data.id);
    localStorage.setItem('myQuizzesArray', JSON.stringify(myQuizzesArray));
    // console.log(JSON.parse(localStorage.getItem('myQuizzesArray')))
  }).catch((error) => console.log(error));
};

function getQuizInfo() {
  console.log(document.querySelector('.criandoQuiz'));
  const title = document.querySelector('.criandoQuiz').firstElementChild.value;
  const image = document.querySelector('.criandoQuiz').firstElementChild.nextElementSibling.value;
  quizData = {
    title,
    image,
  };
};

function getLevels() {
  const levels = [];
  Array.from(document.querySelectorAll('.expandido')).map((level) => {
    const title = level.firstElementChild.nextElementSibling.value;
    const minValue = level.firstElementChild.nextElementSibling.nextElementSibling.value;
    const image = level.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.value;
    const text = level.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value;
    levels.push({
      title,
      image,
      text,
      minValue,
    });
  });
  quizData = {
    ...quizData,
    levels,
  };
  postQuizz(quizData);
};

function getQuestions() {
  const questions = [];
  Array.from(document.querySelectorAll('.expandido')).map((question) => {
    // console.log(question);
    const title = question.firstElementChild.nextElementSibling.firstElementChild.value;
    const color = question.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.value;
    let answers = [];
    const correctAnswerText = question.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.value;
    const correctAnswerImage = question.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.value;
    const correctAnswer = {
      text: correctAnswerText,
      image: correctAnswerImage,
      isCorrectAnswer: true,
    };
    answers.push(correctAnswer);
    Array.from(document.querySelector('.respostasIncorretas').children).map((answer) => {
      answers.push({
        text: answer.firstElementChild.value,
        image: answer.firstElementChild.nextElementSibling.value,
        isCorrectAnswer: false,
      });
    });
    questions.push({
      title,
      color,
      answers,
    });
  });
  quizData = {
    ...quizData,
    questions,
  };
};

// CÓDIGO DO DANILO PARA A PAGINA INICIAL

const quizzesContainer = document.querySelector('.quizzes-container');
const myQuizzes = document.querySelector('.myQuizzes');

function createQuizz() {
  // AQUI É O LINK ENTRE OS SCRIPTS. UMA FUNÇÃO CHAMA A OUTRA
  renderizarPagina1CriacaoQuizz();
};

function buildSavedQuizzes(array) {
  const myQuizzesArray = JSON.parse(localStorage.getItem('myQuizzesArray'));
  console.log(myQuizzesArray);
  const arrayFiltered = array.filter(({ id }) => myQuizzesArray.includes(id));
  console.log(arrayFiltered);
  buildQuizzes(arrayFiltered, true);
};

function buildMyQuizzes(quizzesArray) {
  const myQuizzesArray = JSON.parse(localStorage.getItem('myQuizzesArray'));
  console.log(myQuizzesArray)
  if (myQuizzesArray?.length === 0 || myQuizzesArray === null) {
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
  } else {
    console.log('Render rray');
    buildSavedQuizzes(quizzesArray);
  }
};

function buildQuizzes(quizzesArray, myquiz = false) {
  if (!myquiz) {
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
    })
  } else {
    const title = document.createElement('h3');
    const titleContainer = document.createElement('div');
    const myQuizzesContainer = document.createElement('div');
    const button = document.createElement('ion-icon');

    title.innerHTML = 'Seus Quizzes';
    button.setAttribute('name', 'add-circle');
    button.classList.add('addQuiz');
    titleContainer.classList.add('titleContainer');
    myQuizzesContainer.classList.add('myQuizzesContainer');

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

      myQuizzesContainer.append(card);
    })

    button.addEventListener('click', createQuizz);

    titleContainer.append(title);
    titleContainer.append(button);
    myQuizzes.append(titleContainer);
    myQuizzes.append(myQuizzesContainer);
    myQuizzes.className = 'all-quizzes';
  }

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
