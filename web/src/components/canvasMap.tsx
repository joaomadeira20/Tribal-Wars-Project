import React, { useState, useRef, useEffect } from 'react';

import api from '../services/api';
import '../styles/canvasMap.css';

import image from '../assets/village.png';

interface Aldeia {
    id: number,
    name: string,
    latitude: number,
    longitude: number,
    continente: string,
    username: string
};

let rows: Aldeia[] = [


]

function createData(aldeiasz: Aldeia[]) {
    aldeiasz.map(aldeia => {

        rows.push({
            id: aldeia.id,
            name: aldeia.name,
            latitude: aldeia.latitude,
            longitude: aldeia.longitude,
            continente: aldeia.continente,
            username: aldeia.username
        })
    })
}

export default function CanvasMap() {

    const canvasRef = useRef(null)

    const [aldeias, setAldeias] = useState<Aldeia[]>([]);

    useEffect(() => {

        api.get('aldeias').then(response => {
            /*  rows = [] */
            setAldeias(response.data);
        });

    }, [])

    let canvas = document.getElementById('canvasMap') as HTMLCanvasElement;

    if (canvas) {
        if (canvas.getContext) {
            let context = canvas.getContext("2d");
            if (context) {

                for (var x = 0; x < 850; x += 55) {
                    context.moveTo(x, 0);
                    context.lineTo(x, 850);
                }

                for (var y = 0; y < 850; y += 40) {
                    context.moveTo(0, y);
                    context.lineTo(850, y);
                }

                let img = new Image();
                img.src = image;

                context.fillStyle = '#5e6f1c';
                context.fillRect(0, 0, canvas.width, canvas.height);
                context.strokeStyle = 'grey';
                context.stroke();

                aldeias.map((row, index) => {                    
                    context?.drawImage(img, (row.latitude * 55), (row.longitude * 40));   
                })

            }
        }
    }

    return <canvas width="512px" height="512px" id="canvasMap" ref={canvasRef} className="canvasMap" />

}