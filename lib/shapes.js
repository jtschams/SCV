// Adds text
const addText = function(answers) {
    const { shape, textColor } = answers;
    const text = answers.text.toUpperCase();
    let textEl;
    if (!text) {
        console.log('No logo text input.')
        return '';
    } else if (!textColor) {
        console.error('Text color not defined')
        return '';
    } else if (shape === 'triangle') {
        textEl = `<text x="100" y="160" font-size="60"  text-anchor="middle" fill="${textColor}">${text}</text>`;
    } else {
        textEl = `<text x="100" y="120" font-size="60"  text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
    return textEl;
};

// Draws square
const drawSquare = function({color}) {
    const shapeEl = `<rect x="10" y="10" width="180" height="180" fill="${color}" stroke="${color}" rx="10" ry="10" />`;
    return shapeEl;
};

// Draws circle
const drawCircle = function({color}) {
    const shapeEl = `<circle cx="100" cy="100" r="90" fill="${color}" stroke="${color}" />`
    return shapeEl;
};

// Draws triangle
const drawTriangle = function({color}) {
    const shapeEl = `<polygon points="100,20 180,180 20,180" fill="${color}" stroke="${color}" stroke-width="20" stroke-linejoin="round" />`
    return shapeEl;
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