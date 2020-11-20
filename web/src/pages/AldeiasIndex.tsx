import React, { useEffect, useState } from 'react'


import EnhancedTable from '../components/table'
import NavBar from '../components/navbar'


interface Aldeia {
    id: number;
    name: string;
    latitude: string;
    longitude: string;
    continente: string
    user: {
        id: number
        name: string
        email: string
    }
}
export default function AldeiasIndex() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">  
             
                    
                {
                    EnhancedTable()
                }
                {/* <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </Link> */}
                
            </div>
        </div>
    );
}
