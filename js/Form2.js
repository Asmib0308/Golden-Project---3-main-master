class Form2 {

    constructor() {
      
      this.back = createButton("BACK");
      this.submit = createButton("SUBMIT")
      this.questions = [];
      this.hints = [];
      //qid = 1;
      this.hid = 1;
      this.hero = createInput();
      this.heroine = createInput();
      this.song = createInput();
      this.movie = createInput();
      this.getData();
      this.localdb = [];
      this.localdb2 = []
      this.answers = []
      this.hint3 = createButton("hint1");
      this.hint4 = createButton("hint2");
      this.hintFlag = false
      this.hintFlag2 = false
      this.clickFlag = 0;
      this.saveGame = createButton("Save Your Game")
      
    }
    
  async getData(){
    var localdb = []
    await db.collection('Questions')
            .onSnapshot((snapshot) => {
              var questions = snapshot.docs.map((document) => document.data());
      this.localdb = questions
      //console.log(this.localdb)
    });  
  }
  async getDataHints(){
    var hints = []
    await db.collection("Hints")
      .where('h_id' ,'==', qid)
      .onSnapshot((snapshot)=>{
        hints = snapshot.docs.map((doc) => doc.data())
         
         this.localdb2 = hints
         this.hints = this.localdb2[0]
      }) 
  }
  

  show(){
    this.hero.show();
    this.heroine.show();
    this.song.show();
    this.movie.show();
  }
  
  display(){
    
    push()
    textSize(60);
    fill(197, 57, 125);      
    stroke("white")
    strokeWeight(3)
    textFont("Georgia")
    text("Hero - ",windowWidth/2 - 300 , windowHeight/2 - 200)
    this.hero.position(windowWidth/2 - 300 , windowHeight/2 - 150);
    this.hero.size(250,25)

    text("Heroine - ",windowWidth/2 + 50 , windowHeight/2 - 200)
    this.heroine.position(windowWidth/2 + 50 , windowHeight/2 - 150);
    this.heroine.size(250,25)

    text("Song - ",windowWidth/2 - 300 , windowHeight/2 - 20)
    this.song.position(windowWidth/2 - 300 , windowHeight/2 + 40);
    this.song.size(250,25)

    text("Movie - ",windowWidth/2 + 50 , windowHeight/2 - 20)
    this.movie.position(windowWidth/2 + 50 , windowHeight/2 + 40);
    this.movie.size(250,25)
    pop()

    this.back.position(windowWidth/2 - 660, windowHeight/2 - 360);
    this.back.style("color","purple")

    this.back.mousePressed(()=>{
      gameState = 0;
      this.back.hide();
      this.hero.hide();
      this.heroine.hide();
      this.song.hide();
      this.movie.hide();
      this.submit.hide()
      this.hint3.hide()
      this.hint4.hide()
      this.saveGame.hide()
      form.reappear()              
    })

    for (var q_id in this.localdb){
      if(qid === this.localdb[q_id].q_id ){
        this.questions = this.localdb[q_id]
        //console.log(this.questions)
      }
    }
    
    this.submit.position(windowWidth/2 + 520, windowHeight/2 + 120);
    this.submit.size(130,35);
    this.submit.mousePressed(async()=>{    
      answer = new Answers (this.hero.value(),this.heroine.value(),this.song.value(),this.movie.value()) 
      this.hintFlag = false;
      this.hint3.show()
      this.hintFlag2 = false;
      this.hint4.show()
      this.clickFlag +=1
    })
     
    if (this.clickFlag === 3){
      this.submit.attribute('disabled','')
      setInterval(()=>{
          this.submit.removeAttribute('disabled')
          this.clickFlag = 0
          console.log("works")
        },60000)
    }
    this.saveGame.position(windowWidth/2 + 520, windowHeight/2 + 160)
  }
  
  displayQuestions(){
    push()
    textSize(60);
    fill(197, 57, 125);
    stroke("white")
    strokeWeight(3)
    textFont("Georgia")
    text(this.questions.hero,(windowWidth/2 - 300)+170 , windowHeight/2 - 200)
    this.hero.position(windowWidth/2 - 300 , windowHeight/2 - 150);
    this.hero.size(250,25)

    text(this.questions.heroine,(windowWidth/2 + 50)+250 , windowHeight/2 - 200)
    this.heroine.position(windowWidth/2 + 50 , windowHeight/2 - 150);
    this.heroine.size(250,25)

    text(this.questions.song,(windowWidth/2 - 300)+170 , windowHeight/2 - 20)
    this.song.position(windowWidth/2 - 300 , windowHeight/2 + 40);
    this.song.size(250,25)

    text(this.questions.movie,(windowWidth/2 + 50)+200 , windowHeight/2 - 20)
    this.movie.position(windowWidth/2 + 50 , windowHeight/2 + 40);
    this.movie.size(250,)
    
    pop()
    
    fill(204, 36, 117)
    textSize(23);
    strokeWeight(1)
    text(this.hints.hint1,windowWidth/2 - 670 , windowHeight/2 + 250)
    text(this.hints.hint2,windowWidth/2 - 670 , windowHeight/2 + 300)
    
    textSize(35)
    text("Trivia about the movie : ",windowWidth/2 - 660, windowHeight/2 + 200)
    line(windowWidth/2, windowHeight/2 - 250, windowWidth/2, windowHeight/2 + 110)
    line(windowWidth/2 - 340, windowHeight/2 - 80, windowWidth/2 + 365, windowHeight/2 - 80)
   
    
      this.hint3.position(windowWidth/2 + 620 , windowHeight/2 - 200);
      this.hint3.style("color","purple")
      this.hint3.mousePressed(()=>{
        if(points >= 15){
          this.hint3.hide()
          points = points - 15
          this.hintFlag = true        
        }  
      })
      if (this.hintFlag === true){
        textSize(15);
        text(this.hints.hint3,windowWidth/2 + 470 , windowHeight/2 - 200)
      }
            
      this.hint4.position(windowWidth/2 + 620 , windowHeight/2 - 160);
      this.hint4.style("color","purple")
      this.hint4.mousePressed(()=>{ 
        if(points>= 15){       
          this.hint4.hide() 
          points = points - 15 
          this.hintFlag2 = true    
        }
      })
      if (this.hintFlag2 === true){
        textSize(15);
        text(this.hints.hint4,windowWidth/2 + 470 , windowHeight/2 - 160)          
        }
      
  }
}
