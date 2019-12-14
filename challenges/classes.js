// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(length,height,width){
        this.length = length;
        this.height = height;
        this.width  = width;
    }
    volume(){
        return this.length*this.height*this.width;
    }
    surfaceArea(){
        let h = this.height;
        let l = this.length;
        let w = this.width;
        return 2*(l*w+l*h+w*h);
    }
}

let cuboid = new CuboidMaker(4,5,5)
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.