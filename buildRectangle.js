class Rectangle{
    constructor(height,width) {
        this._height=height
        this._width=width
        this._area=this._height*this._width
        this._perimeter=(this._height+this._width)*2
    }

    get Height(){
        return this._height
    }
    get Width(){
        return this._width
    }
    get Area(){
        return this._area
    }
    get Perimeter(){
        return this._perimeter
    }
    set Height(height){
        this._height=height
    }
    set Width(width){
        this._width=width
    }
    drawRectangle(startX,startY,id,color,lineWidth){
        let canvas=document.getElementById(id).getContext('2d')
        let line1X=startX+parseInt(this._width)
        let line1Y=startY
        let line2X=line1X
        let line2Y=startY+parseInt(this._height)
        let line3X=startX
        let line3Y=line2Y


        canvas.beginPath();
        canvas.strokeStyle=color;
        canvas.lineWidth=lineWidth


        canvas.moveTo(startX,startY)
        canvas.lineTo(line1X,line1Y)
        canvas.lineTo(line2X,line2Y)
        canvas.lineTo(line3X,line3Y)
        canvas.lineTo(startX,startY)
        canvas.stroke();
    }

}

function drawRectangle(){
    let x =document.getElementById("height").value;
    let y =document.getElementById("width").value;
    let color =document.getElementById("color").value;
    let widthLine =document.getElementById("lineWidth").value;
    let rectangleA=new Rectangle(x,y)
    rectangleA.drawRectangle(0,0,"canvas",color,widthLine)
}



