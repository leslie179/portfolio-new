import React from 'react';
import styles from './PartOne.module.css';

const PartOne = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.surveyContainer}>
                <div className={styles.row}>
                    <div className={styles.leftContainer}>
                        <h1 className={styles.h1}>01</h1>
                        <h1 className={styles.h1}>Surveying 8 People With Food Sensitivity Or Allergy</h1>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.yellowBox}>
                            <strong>To better understand the target audience’s needs and challenges, additional research methods are used:</strong>
                            <ul>
                                <li>Surveys</li>
                                <li>Secondary research on resources such as YouTube and Reddit</li>
                            </ul>
                            <a href="#" className={styles.surveyLink}>Look at more stats on our survey here →</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gridContainer}>
                <div className={styles.row}>
                    <div className={styles.orangeBox}>
                        <strong>50%</strong>
                        <p>respondents rated it as "very difficult" when shopping</p>
                    </div>
                    <div className={styles.greenBox}>
                        <strong>63%</strong>
                        <p>Reported that they have severe or very severe allergies and have to constantly clarify ingredients when eating out</p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.greenBox}>
                        <strong>5 respondents</strong>
                        <p>have severe to very severe responses when ingesting allergic or intolerant food</p>
                    </div>
                    <div className={styles.orangeBox}>
                        <strong>5 respondents</strong>
                        <p>are unhappy with the way food products display ingredients</p>
                    </div>
                </div>
            </div>
        </div>
    
    
  );
};

export default PartOne;
