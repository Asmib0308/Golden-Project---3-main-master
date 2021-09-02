class Settings {

  constructor() {

    this.back = createButton("BACK");

  }
  
  reappear(){
    this.back.show()
  }

  display(){
    this.back.position(windowWidth/2 - 660, windowHeight/2 - 360);
    this.back.style("color","purple")

    this.back.mousePressed(()=>{
      gameState = 0;
      this.back.hide()

      form.reappear()
        
    })      
  }
}
