class slingshot{

    constructor (body1,point2){
        var options = {
            
            bodyA : body1,
            pointB : point2,
            length : 5,
            stiffnes : 0.06


        }
this.pointB = point2
this.sling = Constraint.create (options)
World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA !==null)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)

    }
    fly(){
this.sling.bodyA = null
    }  
}
