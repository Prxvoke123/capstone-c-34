class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.8,
            friction:0.8,
            
        }
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r=r
        
    }
    display(){
      push() 
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
    ellipseMode(RADIUS)
    fill("black")
    ellipse(0,0,this.r)
    pop()
    }
    
    }