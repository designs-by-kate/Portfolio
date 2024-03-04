import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Life is a constant lesson</h1>
        <p className={styles.description}>
          I believe that through hard work and perseverance, we can achieve remarkable things.
          My journey is fueled by a deep passion for learning, a commitment to continuous improvement, and the belief that success comes to those who work tirelessly toward their goals.
          I value the wisdom gained from every experience and cherish the lessons learned from others. <br />
          In this space, I invite you to explore my projects, share in my enthusiasm for technology, and witness the dedication I bring to every endeavor. <br />
          Let's connect, collaborate, and embark on a journey of shared knowledge and endless possibilities. <br />
          Thank you for being a part of this adventure.</p>
        <div className={styles.linksContainer}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a href="mailto:katepospiech@hotmail.com" className={styles.contactBtn}>Contact Me</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("hero/email.png")} alt="Email icon"className={styles.email}/>
              <a href="mailto:katepospiech@hotmail.com"></a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("hero/linkedin.png")} alt="LinkedIn icon" />
              <a href="https://www.linkedin.com/in/kate-pospiech-3b8846290/"></a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("hero/githubWhite.png")} alt="Github icon" />
              <a href="https://github.com/designs-by-kate"></a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("hero/cv.png")} alt="CV icon" />
              <a href="https://docs.google.com/document/d/1Jlj1cOzSmFUTdpT2a4lPsVtqIV6q6tRQ4vbNOztjJhI/edit?usp=sharing"></a>
            </li>
          </ul>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};