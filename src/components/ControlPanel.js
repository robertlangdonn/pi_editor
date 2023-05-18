import React, { useEffect } from 'react';
import { fabric } from 'fabric';

function ControlPanel() {
    useEffect(() => {
        var canvas = new fabric.Canvas('canvas', {
            width: 400,
            height: 300,
            backgroundColor: 'lightgrey',
        });

        const addCircle = () => {
            var circle = new fabric.Circle({
                radius: 50,
                fill: 'red',
                left: 100,
                top: 100,
            });
            canvas.add(circle);
        };

        const addRectangle = () => {
            var rectangle = new fabric.Rect({
                width: 100,
                height: 80,
                fill: 'blue',
                left: 200,
                top: 150,
            });
            canvas.add(rectangle);
        };

        const addText = () => {
            var text = new fabric.Textbox('Hello Fabric.js!', {
                width: 200,
                fontSize: 20,
                left: 150,
                top: 200,
            });
            canvas.add(text);
        };

        document.getElementById('add-circle').addEventListener('click', addCircle);
        document.getElementById('add-rectangle').addEventListener('click', addRectangle);
        document.getElementById('add-text').addEventListener('click', addText);
    }, []);

    const exportImage = () => {
        var canvas = document.getElementById('canvas');
        var dataURL = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'drawing.png';
        link.click();
    };

    return (
        <div className="control-panel">
            <button id="add-circle">Add Circle</button>
            <button id="add-rectangle">Add Rectangle</button>
            <button id="add-text">Add Text</button>
            <button onClick={exportImage}>Export</button>
        </div>
    );
}

export default ControlPanel;
