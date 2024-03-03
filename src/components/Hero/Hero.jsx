import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

 
export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Kate</h1>
            <p className={styles.describtion}>I am a developer....</p>
            <a href ="mailto:katepospiech@hotmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.jpg")} 
            alt="My Profile Photo" 
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};