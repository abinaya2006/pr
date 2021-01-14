function Ship(){
    this.pos=createVector(width/2,height/2)
    this.width=40
    this.height=60
    this.heading=0
    
    this.display=function(){
        push ()
        translate (this.pos.x,this.pos.y)
        rotate (this.heading)
        fill ("blue")
        rect (0,0,this.width,this.height)
        pop ()
    }

    this.rota=function(angle){
      this.heading+=angle
    }

    this.move=function(steps){
       this.pos.y+=steps
    }
}