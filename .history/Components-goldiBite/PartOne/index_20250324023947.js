import React from "react";
import styles from "./PartOne.module.css";

const PartOne = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleBox}>
          <h2 className={styles.title}>01</h2>
          <h3 className={styles.subtitle}>
            Surveying 8 People With Food Sensitivity Or Allergy
          </h3>
        </div>

        {/* First Row - Right Box */}
        <div className={styles.firstRow}>
          <div className={styles.infoBox}>
            <p>
              <strong>
                To better understand the target audience’s needs and challenges,
                additional research methods are used:
              </strong>
            </p>
            <ul>
              <li>Surveys</li>
              <li>
                Secondary research on resources such as YouTube and Reddit
              </li>
            </ul>
            <p className={styles.link}>
              Look at more stats on our survey here →
            </p>
          </div>
        </div>

        {/* Second and Third Rows - Staggered Layout */}
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.offsetLeft}`}>
            <p className={styles.highlight}>50%</p>
            <p>respondents rated it as "very difficult" when shopping</p>
          </div>
          <div className={`${styles.card} ${styles.offsetRight}`}>
            <p className={styles.highlight}>63%</p>
            <p>
              Reported that they have severe or very severe allergies and have
              to constantly clarify ingredients when eating out
            </p>
          </div>
          <div className={`${styles.card} ${styles.offsetLeft}`}>
            <p className={styles.highlight}>5 respondents</p>
            <p>
              have severe to very severe responses when ingesting allergic or
              intolerant food
            </p>
          </div>
          <div className={`${styles.card} ${styles.offsetRight}`}>
            <p className={styles.highlight}>5 respondents</p>
            <p>are unhappy with the way food products display ingredients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartOne;
