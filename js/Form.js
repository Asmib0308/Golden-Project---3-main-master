class Form {

  constructor() {
    this.input = createInput("Name");
    this.play = createButton('PLAY');
    this.settings = createButton('settings');
    this.rules = createButton('rules');

    //this.index = null;
    //this.name = null;
  }
   reappear(){
     this.play.show();
     this.input.show();     
     this.settings.show();
     this.rules.show();

     hero.visible = true;
     heroin.visible = true;
     song.visible = true;
     movie.visible = true;
   }

   addPlayer(){
    db.collection("Players").add({ "name": this.input.value(), "q_id": qid})
   }

  display(){
    this.input.position(windowWidth/2 - 660 , windowHeight/2 - 330);

    this.play.position(windowWidth/2 - 90, windowHeight/2 + 70);
    this.play.size(210,70)
    this.play.style("fontSize","large")
   
    this.play.mousePressed(()=>{
      gameState = 1;
      form2 = new Form2()

      this.addPlayer();
      
      this.input.hide();
      this.play.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;
      if(form2)
       form2.back.show()
    })
        
    this.settings.position(windowWidth/2 - 100, windowHeight/2 + 330)
    this.settings.size(60,40)
    this.settings.style("textSize",20)

    this.settings.mousePressed(()=>{
      gameState = 3;

      this.input.hide();
      this.play.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;

      settings.reappear()
    })

    this.rules.position(windowWidth/2 + 100, windowHeight/2 + 330);
    this.rules.size(60,40)
    this.rules.style("textSize",20)

    this.rules.mousePressed(()=>{
      gameState = 4;

      this.input.hide();
      this.play.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;

      rules.reappear();
    })


    

  }
}
