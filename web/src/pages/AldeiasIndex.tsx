import React from 'react'
import EnhancedTable from '../components/table'

/* interface Aldeia {
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
} */

export default function AldeiasIndex() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                {
                    EnhancedTable()
                }
            </div>
        </div>
    );
}
