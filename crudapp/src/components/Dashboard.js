import React from 'react'
import Card from '../pages/Card'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <div className='container'>
                <Card />
            </div>
        </>
    )
}

export default Dashboard