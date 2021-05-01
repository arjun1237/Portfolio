import React from 'react'
import styles from './styles/Home.module.css'

export const Home = () => {
    return (
        <section className={styles.homewrap} id="home">
            <div className={styles.divwrap}>
                <div className={styles.left}>
                    <div className={styles.homeimgwrap}>
                        <img src={process.env.PUBLIC_URL + '/resources/undraw_Hello_qnas.svg'} alt=""/>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightcontainer}>
                        <h2>Hello..!</h2>
                        <h1>Arjun K Prasad</h1>
                        <h2>here</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}