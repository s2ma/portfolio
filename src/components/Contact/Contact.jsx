import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src="/assets/Contact/emailIcon.png" alt ="Email" />
                    <a href= "mailto:s2mallem@gmail.com">s2mallem@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src="/assets/Contact/linkedinIcon.png" alt ="Linkedin" />
                    <a href= "https://www.linkedin.com/in/siddarth-mallemudi-65a16831a">linkedin.com/siddarth-mallemudi</a>
                </li>
                <li className={styles.link}>
                    <img src="/assets/Contact/githubIcon.png" alt ="Email" />
                    <a href= "https://github.com/s2ma">github.com/s2ma</a>
                </li>
            </ul>
        </footer>
    );
};