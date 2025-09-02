
class Rectangle{
    constructor(height,width,color="white"){
        this.height = height;
        this.width = width;
        this.color = color;

        // color = "white" is how we give the default value to the parameter. 
    }

    area(){
        return (this.height * this.width);
    }

    paint(){
        console.log(`Color of the rectangle is ${this.color}`);
    }
}

const rect = new Rectangle(2,5);
const rect2 = new Rectangle(3,4,"Red");
const area = rect.area();
const area2 = rect2.area();
rect.paint();
rect2.paint();
console.log(area);
console.log(area2);

// we can use object(key value pair wala) for do this stuff but the thing is that we need to write the same whole code for different values thatswhere classes came into the picture it defines the structure once and we need to use that structure with different values.Reusability,encapsulation,inheritance is what classes take care of.