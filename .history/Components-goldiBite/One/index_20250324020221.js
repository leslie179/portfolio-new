import React from "react";
import styles from "./One.module.css";

const One = () => {
  return (
    <div>
    <div className={styles.leftRightContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.h1}>
            1. How it started
        </h1>
        <p className={styles.leftP}>
        One of our friends, during a Mexico trip, had a sudden medical scare. She was diagnosed with celiac disease at age 22. We realized that not only can you be born with food allergies/intolerances, you can also develop them. Our instructor suggested we build an app that empowers people, so we researched this topic. Turns out...
        </p>
      </div>
      <div className={styles.rightContent}>
        <h2 className={styles.h2}>
        3 million +
        </h2>
        <p className={styles.rightP}>
        Canadians self-reported having at least 1 food allergy
        </p>
        <h2 className={styles.h2}>
        7.4 million +
        </h2>
        <p className={styles.rightP}>
        Canadians have reported to at least have 1 food intolerance.
        </p>
      </div>
    </div>
    </div>
  );
};

export default One;
