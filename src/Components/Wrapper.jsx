import React from 'react'
import { FullStackDisplay } from './FullStackDisplay'
import { Mainbar } from './Mainbar'
import { Sidebar } from './Sidebar'

export const Wrapper = () => {
    return (
        <div>
            <Sidebar />
            <Mainbar />
            <FullStackDisplay />
        </div>
    )
}
