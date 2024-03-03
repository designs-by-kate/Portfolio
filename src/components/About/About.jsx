import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

 
export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/aboutImage.jpg")} 
            alt="My profile Photo"
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="Cursor icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Experience Title</h3>
                        <p>Description of this experience</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="Cursor icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Experience Title</h3>
                        <p>Description of this experience</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="Cursor icon"
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Experience Title</h3>
                        <p>Description of this experience</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
};