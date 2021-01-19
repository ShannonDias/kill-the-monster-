class Hero {
    constructor(x,y,radius){
    var options = {
  
    friction:1,
    density:1
    }
    this.heroIm = loadImage ('images/Superhero-02.png')
    this.body = Bodies.circle(x,y,radius,options)
    World.add (world,this.body)
    this.radius = radius
  
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
       ellipseMode(RADIUS)
       fill('blue')
       ellipse(0,0,this.radius,this.radius)
       pop()
    }
  }