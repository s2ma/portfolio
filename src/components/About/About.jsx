import React from "react";
import styles from "./About.module.css";
import skills from "../Data/skills.json";
import history from "../Data/history.json";

export const About = () => {
    return (
        <section className={styles.container} id="experience">
        <h2 className={styles.title}>Technical Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skills, id) => {
                    return (
                    <div key={id} className={styles.skillImageContainer} >
                        <div><img src={`/assets/${skills.imageSrc}`} alt={skills.title}/> </div>
                    </div>
                    );
                })}
            </div>
            <ul className={styles.history}>
                {
                    history.map((history, id) => {
                        return (
                            <li className={styles.historyItem} key={id}>
                                <div className={styles.historyItemDetails}>
                                    <h3 className={styles.text}>{`${history.role}, ${history.organization}`}</h3>
                                    <p3 className={styles.text}>{`${history.sd} - ${history.ed}`}</p3>
                                    <ul className={styles.text}>{history.responsibility.map((responsibility, id) => {
                                        return <li key={id}>{responsibility}</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    </section>
    );
}