import React from "react";
import styles from "./One.module.css";

const One = () => {
  return (
    <div className={styles.leftRightContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.h1}>
            1. How it started
        </h1>
        <p className={styles.left1}>
        One of our friends, during a Mexico trip, had a sudden medical scare. She was diagnosed with celiac disease at age 22. We realized that not only can you be born with food allergies/intolerances, you can also develop them. Our instructor suggested we build an app that empowers people, so we researched this topic. Turns out...
        </p>
      </div>
      <div className={styles.rightContent}>
        <p className={styles.rightp}>
                    So they don’t die from something like a peanut allergy.
        </p>
      </div>
    </div>
  );
};

export default One;
