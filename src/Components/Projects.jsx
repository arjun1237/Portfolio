import React from 'react'
import styles from './styles/Projetcs.module.css'

export const Projects = () => {

    return (
        <section id="projects">
            <div className={styles.projwrap}>
                <div className={styles.left}>
                    {projects.map(project => 
                            <div className={styles.project} key={project.img}>
                                <div>
                                    <img src={project.img} alt={project.name}/>
                                </div>
                                <div className={styles.proj_title}>
                                    <p>{project.name}</p>
                                </div>
                                <div className={styles.proj_btns}>
                                    {project.github &&
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                                    }
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">LIVE DEMO</a>
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
        img: process.env.PUBLIC_URL + '/resources/masai-ref-img.png',
        github: null,
        live: "https://refresh.masai.tech/",
        name: "Masai Refresh"
    },
    {
        img: process.env.PUBLIC_URL + '/resources/chitrakala-img.png',
        github: "https://github.com/arjun1237/chitrakala",
        live: "https://chitrakala-arjun1237.vercel.app/",
        name: "Chitrakala"
    },
    {
        img: process.env.PUBLIC_URL + '/resources/ffx-img.png',
        github: null,
        live: "http://ffx.co.uk/",
        name: "FFX E-comm"
    },
    {
        img: process.env.PUBLIC_URL + '/resources/cardom-img.png',
        github: "https://github.com/arjun1237/cardom",
        live: "https://arjun1237.github.io/cardom/",
        name: "Cardom"
    },
    {
        img: process.env.PUBLIC_URL + '/resources/trivia-img.png',
        github: "https://github.com/arjun1237/trivia_quiz",
        live: "https://arjun1237.github.io/trivia_quiz/index.html",
        name: "Trivia Quiz"
    },
    {
        img: process.env.PUBLIC_URL + '/resources/stimer-img.png',
        github: "https://github.com/arjun1237/stimer",
        live: "https://stimer-arjun1237.vercel.app/",
        name: "Stimer"
    }
]