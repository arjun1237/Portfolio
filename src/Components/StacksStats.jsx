import React from 'react'
import styles from './styles/StackStats.module.css'

export const StacksStats = () => {
    return (
        <section id="stack">
            <div className={styles.stackwrap}>
                <h1>TECH STACKS &#38; GITHUB STATS</h1>
                <div className={styles.stacks}>
                    {stacks.map(stack => 
                        <img src={stack} alt="" key={stack}/>
                    )}
                </div>
                <div className={styles.stats}>
                    <div className={styles.images}>
                        <div className={styles.statImg}>
                            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=arjun1237&theme=radical" alt=""/>
                        </div>
                        <div className={styles.githubStats}>
                            <img src="https://github-readme-stats.vercel.app/api?username=arjun1237&show_icons=true&theme=radical&include_all_commits=true" alt=""/>
                        </div>
                        <div className={styles.stackImg}>
                            <img src={process.env.PUBLIC_URL + '/resources/undraw_developer_activity_bv83.svg'} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const stacks = [
    process.env.PUBLIC_URL + '/resources/javascript.svg',
    process.env.PUBLIC_URL + '/resources/html-5.svg',
    process.env.PUBLIC_URL + '/resources/material-ui.svg',
    process.env.PUBLIC_URL + '/resources/css-3.svg',
    process.env.PUBLIC_URL + '/resources/bootstrap.svg',
    process.env.PUBLIC_URL + '/resources/react.svg',
    process.env.PUBLIC_URL + '/resources/redux.svg',
    process.env.PUBLIC_URL + '/resources/nodejs-icon.svg',
]