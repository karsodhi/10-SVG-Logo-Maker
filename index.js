const { Circle, Triangle, Square } = require("./lib/shapes.js")
const { writeFile } = require("fs/promises")
const inquirer = require("inquirer")
function addShape() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter text up to 3 characters",
            name: "textname",
            validate: (textname) => textname.length <= 3 || "Please only select 3 characters"
        },
        {
            type: "input",
            message: "Please select a text color",
            name: "textcolor",
        },
        {
            type: "list",
            message: "Please select a shape",
            name: "shapename",
            choices: ["Circle", "Square", "Triangle"]
        },
        {
            type: "input",
            message: "Please select a shape color",
            name: "shapecolor",
        }
    ]).then(response => {
        var shape;
        switch (response.shapename) {
            case "Circle":
                shape = new Circle()
                break;
            case "Square":
                shape = new Square()
                break;
            case "Triangle":
                shape = new Triangle()
                break;
        }
        shape.setColor(shapecolor)
        // const svg = new SVG()
        /* svg.setShape(shape)
        svg.setText(textname,textcolor)
        return writeFile("logo.svg", svg.render())
        */
    })
    .then(()=>{
        console.log("Successfully created logo")
    })

    writeToFile("logo.svg", shape.render());

}
