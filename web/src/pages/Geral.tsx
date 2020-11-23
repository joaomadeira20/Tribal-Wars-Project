import React from 'react'
import EnhancedTable from '../components/table'
import Map from '../components/canvasMap'
import '../styles/geral.css'

export default function Geral() {
    
    return (
        <div className="container">
            <div className="container-item">
                <div className="map">
                    {
                        Map()
                    }
                </div>
            </div>
            <div className="container-item villages">
                {
                    EnhancedTable()
                }
            </div>
            <div className="container-item">
                <div className="map">
                    
                </div>
            </div>
        </div>
    )

}