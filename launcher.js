class Launcher{
    constructor(bodyA,pointB){
        var options = {
           bodyA : bodyA,
           pointB : pointB,
           stiffness : 0.04,
           length : 10,
        }
         this.launcher = Constraint.create(options);
         World.add(world,this.launcher);
         

    }
  fly()
  {
      this.launcher.bodyA = null;
  }

display(){

    var pointA = this.launcher.bodyA.position;
    var pointB = this.launcher.bodyB.position;

    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}