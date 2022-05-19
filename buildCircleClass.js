class Circle{
    constructor(radius,color) {
        this._radius=radius
        this._color=color
    }
    Circle(){
        console.log(this.Area)
    }
    get Radius(){
        return this._radius
    }
    get Area(){
        return Math.PI*Math.pow(this._radius,2)
    }
}
let circleA=new Circle(30,"red")
circleA.Circle()