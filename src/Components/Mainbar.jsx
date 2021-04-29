import React from 'react'
import { Contact } from './Contact'
import { Home } from './Home'
import { Projects } from './Projects'
import { StacksStats } from './StacksStats'
import styles from './styles/Mainbar.module.css'

export const Mainbar = () => {
    return (
        <div className={styles.mainwrap}>
            <Home />
            <Projects />
            <StacksStats />
            <Contact />
        </div>
    )
}
