import React, { useEffect } from 'react';
import { fabric } from 'fabric';

function DrawingBoard() {
    useEffect(() => {
        var canvas = new fabric.Canvas('canvas', {
            width: 400,
            height: 300,
            backgroundColor: 'lightgrey',
        });
    }, []);

    return (
        <div className="drawing-board">
            <canvas id="canvas"></canvas>
        </div>
    );
}

export default DrawingBoard;
