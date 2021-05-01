import React from 'react'
import styles from './styles/Projetcs.module.css'

export const Projects = () => {
    return (
        <section id="projects">
            <div className={styles.projwrap}>
                <div className={styles.left}>
                    {projects.map(project => 
                            <div className={styles.project}>
                                <div>
                                    <img src={project.img} alt=""/>
                                </div>
                                <div className={styles.proj_title}>
                                    <p>project name</p>
                                </div>
                                <div className={styles.proj_btns}>
                                    <button>GITHUB</button>
                                    <button>LIVE DEMO</button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={styles.right}>
                    <div className={styles.imgwrap}>
                        <h1>PROJECTS</h1>
                        <img src={process.env.PUBLIC_URL + '/resources/undraw_Preparation_re_t0ce.svg'} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}


const projects = [
    {
        img: process.env.PUBLIC_URL + '/resources/undraw_developer_activity_bv83.svg',
        github: "",
        live: ""
    },
    {
        img: process.env.PUBLIC_URL + '/resources/undraw_developer_activity_bv83.svg',
        github: "",
        live: ""
    },
    {
        img: process.env.PUBLIC_URL + '/resources/undraw_developer_activity_bv83.svg',
        github: "",
        live: ""
    },
    {
        img: process.env.PUBLIC_URL + '/resources/undraw_developer_activity_bv83.svg',
        github: "",
        live: ""
    },
    {
        img: process.env.PUBLIC_URL + '/resources/undraw_developer_activity_bv83.svg',
        github: "",
        live: ""
    },
    {
        img: process.env.PUBLIC_URL + '/resources/undraw_developer_activity_bv83.svg',
        github: "",
        live: ""
    }
]