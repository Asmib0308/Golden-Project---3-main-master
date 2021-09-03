var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var qid =1
var form;
var answer;

var form2;
var rules;
var title,guru;
var hero, heroin, song, movie;
var points = 30;
var db

var flag = 0;

function preload(){
  gameback = loadImage("img/4.png")
  heroI = loadImage("img/hero2.png")
  heroinI = loadImage("img/heroin2.png")
  movieI = loadImage("img/movie2.png")
  songI = loadImage("img/song2.png")
  titleI = loadImage("img/title.png")
  guruI = loadImage("img/guru.png")
  ticketI = loadImage("img/ticket.png")
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  db = firebase.firestore()
  form = new Form()
  //settings = new Settings()
  //rules = new Rules()


  title = createSprite(windowWidth/2 + 20 , windowHeight/2)
  title.addImage(titleI)
  title.scale = 1.8;
  
  guru = createSprite(windowWidth/2 - 350 , windowHeight/2 - 80)
  guru.addImage(guruI)
  guru.scale = 1.6;
  
  hero = createSprite(windowWidth/2 - 115 , windowHeight/2 - 160)
  hero.addImage(heroI)
  hero.scale = 0.5;

  heroin = createSprite(windowWidth/2 + 156 , windowHeight/2 - 170)
  heroin.addImage(heroinI)
  heroin.scale = 0.46;

  song = createSprite(windowWidth/2 - 120 , windowHeight/2 - 40)
  song.addImage(songI)
  song.scale = 0.35;

  movie = createSprite(windowWidth/2 + 135 , windowHeight/2 - 60)
  movie.addImage(movieI)
  movie.scale = 0.45;


  
}


function draw(){
  background(gameback)

  textSize(15)
  stroke(204, 36, 117)
  strokeWeight(1)
  fill(204, 36, 117)
  text("Bolly coins : " + points,windowWidth/2 + 570, windowHeight/2 - 360)

  if (gameState === 0){
    form.display()
    line(windowWidth/2, windowHeight/2 - 230, windowWidth/2, windowHeight/2)
    line(windowWidth/2 - 280, windowHeight/2 - 120, windowWidth/2 + 320, windowHeight/2 - 120)
   }  
  
   if(gameState === 1 ){
    
    form2.display()
    form2.getDataHints()
    form2.displayQuestions()
    
  }
  if (flag === 4){
    flag = 0;
    reset();

  }

  if (gameState === 3){   
  //settings.display()
  }

  if (gameState === 4){   
//  rules.display()
  }
  
  drawSprites();
}
function reset(){
  form2.show();
  points += 20;
  qid += 1;
}
