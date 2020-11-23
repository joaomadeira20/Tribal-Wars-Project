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

                for (var x = 0.5; x < 850; x += 50) {
                    context.moveTo(x, 0);
                    context.lineTo(x, 850);
                }

                for (var y = 0.5; y < 850; y += 50) {
                    context.moveTo(0, y);
                    context.lineTo(850, y);
                }

                let img = new Image();
                img.src = image;

                aldeias.map((row, index) => {                    
                    context?.drawImage(img, (row.latitude * 50), (row.longitude * 50));   
                    /* context?.fillRect((row.latitude * 50), (row.longitude * 50), 50, 50); */
                })

                context.strokeStyle = 'grey';
                context.stroke();

            }
        }
    }

    return <canvas id="canvasMap" ref={canvasRef} className="canvasMap" />

}