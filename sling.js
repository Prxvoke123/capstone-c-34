class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:300
        
        }
        this.Sling=Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.Sling)
    }
   display(){
     stroke('green')
     strokeWeight(4)
     line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,
        this.pointB.x,this.pointB.y)
   }
}