import { Shape } from "./shape.js"

export class Square extends Shape {
    constructor(num, val){
        super(num)
        this.val = val
    }
    
}

const square= new Square('ten','two')
console.log(square)