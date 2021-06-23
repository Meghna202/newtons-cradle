class Chain{
    constructor(bodyA, bodyB) {
        var options={
              length:200,
              stiffness:0.05,
              bodyA:bodyA,
              bodyB:bodyB,
            }
        this.bodyA = bodyA;
        this.bodyB = bodyB;
        console.log(this.bodyA);
        console.log(this.bodyB);
        this.chain=Constraint.create(options);
        World.add(world, this.chain);
      }


    

    display(){
        line (this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }

}    
