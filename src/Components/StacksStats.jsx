import React from 'react'
import styles from './styles/StackStats.module.css'

export const StacksStats = () => {
    return (
        <section id="stack">
            <div className={styles.stackwrap}>
                <div className={styles.one}>
                    <div className={styles.stackImg}>
                        <h1>Tech Stack &#38; Stats</h1>
                        <img src={process.env.PUBLIC_URL + '/resources/undraw_developer_activity_bv83.svg'} alt=""/>
                    </div>
                </div>
                <div className={styles.two}>
                    {stacks.map(stack => 
                        <img src={stack} alt=""/>
                    )}
                </div>
                <div className={styles.three}>
                </div>
            </div>
        </section>
    )
}


const stacks = [
    process.env.PUBLIC_URL + '/resources/html-5.svg',
    process.env.PUBLIC_URL + '/resources/css-3.svg',
    process.env.PUBLIC_URL + '/resources/javascript.svg',
    process.env.PUBLIC_URL + '/resources/material-ui.svg',
    process.env.PUBLIC_URL + '/resources/react.svg',
    process.env.PUBLIC_URL + '/resources/redux.svg',
    process.env.PUBLIC_URL + '/resources/nodejs-icon.svg',
    process.env.PUBLIC_URL + '/resources/bootstrap.svg'
]