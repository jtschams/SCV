// Adds text
const addText = function(answers) {
};

// Draws square
const drawSquare = function(answers) {
};

// Draws circle
const drawCircle = function(answers) {
};

// Draws triangle
const drawTriangle = function(answers) {
};

// sorts to correct shape function and then combines with addText
const drawLogo = function(answers) {
    let shapeEl = ""
    switch (answers.shape) {
        case 'square' :
            shapeEl = drawSquare(answers)
            break;
        case 'triangle' :
            shapeEl = drawTriangle(answers)
            break;
        case 'circle' :
            shapeEl = drawCircle(answers)
            break;
        default:
            console.error('An error occurred selecting the shape.')
    }
    const textEl = addText(answers)

    const logo = `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">${shapeEl}${textEl}</svg>`
    return logo;
};

module.exports = {
    drawLogo,
    drawSquare,
    drawCircle,
    drawTriangle,
    addText
}