import React from 'react'
import styles from './styles/Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptopCode, faLayerGroup, faIdCard } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
    return (
        <div className={styles.sideWrap}>
            <div className={styles.sidecontainer}>
                <div>
                    <a href="#home">
                        <FontAwesomeIcon icon={faHome} size="3x" />
                        <p>Home</p>
                    </a>
                </div>
                <div>
                    <a href="#projects">
                        <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                        <p>Projects</p>
                    </a>
                </div>
                <div>
                    <a href="#stack">
                        <FontAwesomeIcon icon={faLayerGroup} size="3x" />
                        <p>Tech Stacks</p>
                    </a>
                </div>
                <div>
                    <a href="#contact">
                        <FontAwesomeIcon icon={faIdCard} size="3x" />
                        <p>Contact</p>
                    </a>
                </div>
            </div>
        </div>
    )
}