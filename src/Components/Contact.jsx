import React from 'react'
import styles from './styles/Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
    return (
        <section id="contact">
            <div className={styles.contactWrap}>
                <h1>Hire me <span>NOW</span>, before someone else does!</h1>
                <img src={process.env.PUBLIC_URL + '/resources/undraw_contact_us_15o2.svg'} alt=""/>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>Arjun K Prasad</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>arjun1237.kp@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>+91-7349622070</td>
                        </tr>
                        <tr>
                            <td>Social Media Reach:</td>
                            <td className={styles.sMedia}>
                                <a href="https://github.com/arjun1237" title="GitHub link" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://www.linkedin.com/in/arjun1237/" title="LinkedIn link" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="https://twitter.com/arjun1237_kp" title="Twitter Link" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>Current Location:</td>
                            <td>Bengaluru</td>
                        </tr>
                        <tr>
                            <td>Willing to relocate?:</td>
                            <td>Yes, after pandemic ends.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
