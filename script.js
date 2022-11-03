function renderizarPagina(){
    let conteudo = document.querySelector('main');
    conteudo.innerHTML=`  <h2>Comece pelo começo</h2>
    <div class="input">
        <input type="text" placeholder="Título do seu quizz"  name="" id="">
        <input type="text" placeholder="URL da imagem do seu quizz"name="" id="">
        <input type="text" placeholder="Quantidade de perguntas do quizz"name="" id="">
        <input type="text" placeholder="Quantidade de níveis do quizz"name="" id="">
    </div>
    <button onclick="irParaPagina2()">Prosseguir pra criar perguntas</button>`
}
renderizarPagina()

function irParaPagina2(){
    let conteudo = document.querySelector('main');
    conteudo.innerHTML=` <main class="tela2">
    <h2>Crie suas perguntas</h2>
    <section class="input">
        
        <h3>Pergunta 1</h3>
        <div> 
            <input type="text" placeholder="Texto da pergunta" name="" id="">
            <input type="text" placeholder="Cor de fundo da pergunta"name="" id="">
        </div>
        <h3>Resposta correta</h3>
        <div>
            <input type="text" placeholder="Resposta correta"name="" id="">
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
    </section>
    <section class="inputFechada inputFechadaDois">
        <h3>Pergunta 2</h3>
        <img src="icones/Vector (3).svg" alt="">
    </section>
    <section class="input inputDois">
        <h3>Pergunta 2</h3>
        <div> 
            <input type="text" placeholder="Texto da pergunta" name="" id="">
            <input type="text" placeholder="Cor de fundo da pergunta"name="" id="">
        </div>
        <h3>Resposta correta</h3>
        <div>
            <input type="text" placeholder="Resposta correta"name="" id="">
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
    </section>
    <section class="inputFechada inputFechadaTres">
        <h3>Pergunta 3</h3>
        <img src="icones/Vector (3).svg" alt="">
    </section>
    <section class="input inputTres">
        <h3>Pergunta 3</h3>
        <div> 
            <input type="text" placeholder="Texto da pergunta" name="" id="">
            <input type="text" placeholder="Cor de fundo da pergunta"name="" id="">
        </div>
        <h3>Resposta correta</h3>
        <div>
            <input type="text" placeholder="Resposta correta"name="" id="">
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
    </section>  
    <button onclick="irParaPagina3()" >Prosseguir pra criar níveis</button>
</main>`
}

function irParaPagina3(){
    let conteudo = document.querySelector('main');
    conteudo.innerHTML=`   <h2>Agora, decida os níveis</h2>
    <section class="input">
        <h3>Nível 1</h3>
        <input type="text" placeholder="Título do nível"  name="" id="">
        <input type="text" placeholder="% de acerto mínima"name="" id="">
        <input type="text" placeholder="URL da imagem do nível"name="" id="">
        <input type="text" placeholder="Descrição do nível"name="" id="">
    </section>
    <section class="inputFechada">
        <h3>Nível 1</h3>
        <img src="icones/Vector (3).svg" alt="">
    </section>
        
   
    <button onclick="irParaPagina4()">Prosseguir pra criar perguntas</button>`
}
function irParaPagina4(){
    let conteudo = document.querySelector('main');
    conteudo.innerHTML=`<h2>Seu quizz está pronto!</h2>
    <section>
        <img class="imagemFinal" src="img/Rectangle 34.png" alt="">
        <p></p>
    </section>
    <button>Acessar Quizz</button>
    <p>Voltar pra home</p>`
}