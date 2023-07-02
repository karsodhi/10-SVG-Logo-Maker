class Shape {
    constructor(){
        this.color = ""
    }
    setColor (color){
        this.color = color
    }
}


class Circle extends Shape {
    render(){
        return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.color}" stroke-width="5"/>`
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="50, 160 55, 180 70 fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30 fill=${this.color}"/>`
    }
}
module.exports={Circle, Triangle, Square}
