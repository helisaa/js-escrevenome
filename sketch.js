
function setup() {
    createCanvas(600, 400);
    noLoop();
  }
  
  function draw() {
    background(imagemDoFundo);
    image(imagemDoRobo, 220, 200, 150, 150);
    image(imagemDoBalao, 145, 10, 300, 200);
    textSize(15);
    textAlign(CENTER);
    textStyle(BOLD);
    text("Seja bem vindo ao Alura Genius \n" +
         "Para adivinhar o seu nome, responda \n" + 
         "minhas perguntas com frases \n" + 
         "longas. \n" +
         "clique na tela para começar!" , 290, 50);
  }
  
  function mousePressed() {
    if (numeroDaPergunta == 0){ 
    numeroDaPergunta++
    pergunta();
    }
    
  
  }
  function perguntar(){
    if (numeroDaPergumta == 1){
      image(imagemDoBalao, 145, 10, 300, 200); 
      textSize(15);
      textAlign(CENTER);
      textStyle(BOLD);
      text("Qual seu livro favorito?", 290, 50);
    }
  }