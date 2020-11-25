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
                <div className="details-map">
                    Ataques
                    <ul>
                        <li>
                            x
                        </li>
                        <li>
                            y
                        </li>
                        <li>
                            z
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-item villages">
                {
                    EnhancedTable()
                }
            </div>
        </div>
    )

}