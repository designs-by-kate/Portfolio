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
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/edx.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Bootcamp edX</h3>
              <p>
                Front-End Web Development
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ou.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Open University</h3>
              <p>
              Diploma of Higher Education Diploma of Higher Education in Computing & IT and Design
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/up.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>University of Life Sciences</h3>
              <p>
              Bachelor of Science Food Technology and Human Nutrition (Major in Dietetics)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};