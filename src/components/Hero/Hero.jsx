import React from "react";
import styles from "./Hero.module.css";
export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hello, I'm Siddarth</h1>
            <p className={styles.description}>I am a current Master's student studying Computer Science at George Mason University and I will be graduating this May at 19 years old. 
                I have experience in all sorts of tools and languages and some of my interests include Full stack development, AI, and Databases. Outside of CS, I enjoy playing the guitar, cooking, magic, and motorcycling. Feel free to contact me!
            </p>
            <a href="mailto:s2mallem@gmail.com" className={styles.btn}>Contact Me</a>
        </div>
        <img src={"/assets/about/professional.jpeg"} alt="image of me" className={styles.heroImg}/>
        <div className={styles.bg}/>
    </section>;
}