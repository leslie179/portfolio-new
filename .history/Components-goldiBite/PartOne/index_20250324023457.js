import React from "react";
import styles from "./PartOne.module.css";

const PartOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>01</h2>
        <h3>Surveying 8 People With Food Sensitivity Or Allergy</h3>
      </div>

      <div className={styles.grid}>
        {/* Research Methods */}
        <div className={`${styles.card} ${styles.yellow}`}>
          <p>
            To better understand the target audience’s needs and challenges,
            additional research methods are used:
          </p>
          <ul>
            <li>Surveys</li>
            <li>Secondary research on resources such as YouTube and Reddit</li>
          </ul>
          <span className={styles.link}>Look at more stats on our survey here →</span>
        </div>

        {/* 50% Difficulty */}
        <div className={`${styles.card} ${styles.orange}`}>
          <h4>50%</h4>
          <p>respondents rated it as "very difficult" when shopping</p>
          <span className={styles.annotation}>Major concerns →</span>
        </div>

        {/* 63% Severe Allergy */}
        <div className={`${styles.card} ${styles.green}`}>
          <h4>63%</h4>
          <p>
            Reported that they have severe or very severe allergies and have to
            constantly clarify ingredients when eating out
          </p>
        </div>

        {/* 5 Respondents (Severe Reactions) */}
        <div className={`${styles.card} ${styles.lightGreen}`}>
          <h4>5 respondents</h4>
          <p>
            have severe to very severe responses when ingesting allergic or
            intolerant food
          </p>
        </div>

        {/* 5 Respondents (Unhappy with Labeling) */}
        <div className={`${styles.card} ${styles.lightOrange}`}>
          <h4>5 respondents</h4>
          <p>are unhappy with the way food products display ingredients</p>
        </div>
      </div>

      {/* View Full Survey Button */}
      <button className={styles.button}>View full document of the survey</button>
    </div>
  );
};

export default PartOne;
