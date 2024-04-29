const shapes = require('../shapes.js');

describe('Shapes', () => {
    describe('circle', () => {
        it('should create an svg with the type circle', () => {
            const correctShape = '<circle />';
            const shapeObject = {
                shape: 'circle',
                color: 'green',
                text: 'txt',
                textColor: 'white'
            };
            const drawnShape = shapes.drawCircle(shapeObject);
            expect(drawnShape.slice(1, 7)).toEqual(correctShape.slice(1, 7))
        })
        it('should be a color corresponding to the color property', () => {
            const correctShape = '<circle cx="100" cy="100" r="90" fill="green" stroke="green" />'
            const shapeObject = {
                shape: 'circle',
                color: 'green',
                text: 'txt',
                textColor: 'white'
            };
            const drawnShape = shapes.drawCircle(shapeObject);
            expect(drawnShape).toEqual(correctShape)
        })
    })
    describe('triangle', () => {
        it('should create an svg with the type polygon', () => {
            const correctShape = '<polygon />'
            const shapeObject = {
                shape: 'triangle',
                color: 'red',
                text: 'txt',
                textColor: 'white'
            };
            const drawnShape = shapes.drawTriangle(shapeObject);
            expect(drawnShape.slice(1, 8)).toEqual(correctShape.slice(1, 8))
        })
        it('should be a color corresponding to the color property', () => {
            const correctShape = '<polygon points="100,20 180,180 20,180" fill="red" stroke="red" stroke-width="20" stroke-linejoin="round"/>'
            const shapeObject = {
                shape: 'triangle',
                color: 'red',
                text: 'txt',
                textColor: 'white'
            };
            const drawnShape = shapes.drawTriangle(shapeObject);
            expect(drawnShape).toEqual(correctShape)
        })
    })
    describe('square', () => {
        it('should create an svg with the type rect', () => {
            const correctShape = '<rect />'
            const shapeObject = {
                shape: 'square',
                color: 'blue',
                text: 'txt',
                textColor: 'white'
            };
            const drawnShape = shapes.drawSquare(shapeObject);
            expect(drawnShape.slice(1, 5)).toEqual(correctShape.slice(1, 5))
        })
        it('should be a color corresponding to the color property', () => {
            const correctShape = ''
            const shapeObject = {
                shape: 'square',
                color: 'blue',
                text: 'txt',
                textColor: 'white'
            };
            const drawnShape = shapes.drawSquare(shapeObject);
            expect(drawnShape).toEqual(correctShape)
        })
    })
    describe('text', () => {
        it('should create an svg with text matching the text property', () => {
            const correctText = "TXT";

            const squareObject = {
                shape: 'square',
                color: 'blue',
                text: 'txt',
                textColor: 'white'
            };
            const triangleObject = {
                shape: 'triangle',
                color: 'red',
                text: 'txt',
                textColor: 'white'
            };
            const drawnSquare = shapes.addText(squareObject);
            const drawnTriangle = shapes.addText(triangleObject);

            expect(drawnSquare.textContent).toEqual(correctText)
            expect(drawnTriangle.textContent).toEqual(correctText)
        })
        it('should be a color corresponding to the color property', () => {
            const squareText = '<text x="100" y="120" font-size="60"  text-anchor="middle" fill="white">TXT</text>'
            const triangleText = '<text x="100" y="160" font-size="60"  text-anchor="middle" fill="white">TXT</text>'
            
            const squareObject = {
                shape: 'square',
                color: 'blue',
                text: 'txt',
                textColor: 'white'
            };
            const triangleObject = {
                shape: 'triangle',
                color: 'red',
                text: 'txt',
                textColor: 'white'
            };

            const drawnSquare = shapes.addText(squareObject);
            const drawnTriangle = shapes.addText(triangleObject);
    
            expect(drawnSquare).toEqual(squareText)
            expect(drawnTriangle).toEqual(triangleText)
        })
    })
})