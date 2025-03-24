import React from "react";
import styles from "./Scope.module.css";

const Scope = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery",
      tasks: [
        "General survey",
        "Competitive analysis",
        "Personas",
        "Main app features (site-map)",
      ],
      image: "/images/discovery.png",
    },
    {
      id: 2,
      title: "Wireframing",
      tasks: ["Branding", "Figma set ups", "Lo-fi", "User testing", "Hi-fi"],
      image: "/images/wireframing.png",
    },
    {
      id: 3,
      title: "Final push",
      tasks: [
        "Promotional video",
        "Promotional materials",
        "Potential ventures",
      ],
      image: "/images/finalpush.png",
    },
  ];

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Scope of work</h2>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`${styles.step} ${
              index % 2 === 0 ? styles.up : styles.down
            }`}
          >
            <img src={step.image} alt={step.title} className={styles.image} />
            <div className={styles.badge}>{step.id}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <ul className={styles.taskList}>
              {step.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scope;













<div className={styles.contentContainer3}>
<div className={styles.column}>
    <div className={styles.section}>
        <h2 className={styles.title5}>
            Emergency Contact Feature Not Obvious Enough
        </h2>
        <p className={styles.p5}>
            •  Some testers had difficulty finding how to contact emergency services.<br />
            • One tester was confused about who they were contacting (e.g., local emergency services vs. a pre-set emergency contact).<br />
            • Too much text on the emergency contact page caused cognitive overload.
        </p>
    </div>

    <div className={styles.section}>
        <h2 className={styles.title5}>Barcode Scanner & Menu Scanner Issues</h2>
        <p className={styles.p5}>
            • Several users reported bugs with the barcode and menu scanner.<br />
            •Lack of a back button for exiting the scanner.<br />
            •Users expected a camera button instead of just a manual entry option.<br />
            •Some testers assumed scanning a menu and scanning a barcode were the same thing, leading to confusion.
        </p>
    </div>
</div>

<div className={styles.section1}>
        <h2 className={styles.titlespec}>
        Barcode Scanner & Menu Scanner Issues
        </h2>
        <p className={styles.pspec}>
            • Several users reported bugs with the barcode and menu scanner.<br />
            •Lack of a back button for exiting the scanner.<br />
            •Users expected a camera button instead of just a manual entry option.<br />
            •Some testers assumed scanning a menu and scanning a barcode were the same thing, leading to confusion.
        </p>
    </div>


    <div className={styles.section1}>
        <h2 className={styles.titlespec}>
            Guide Section & Accessibility
        </h2>
        <p className={styles.pspec}>
            •Some users felt the age input feature was unnecessary and might raise privacy concerns.<br />
            •One tester wanted a quick explanation of the app’s key features at the beginning.<br />
            •A tester suggested the app should open directly to the scanner since it's the primary function.
        </p>
    </div>

    <div className={styles.section1}>
        <h2 className={styles.titlespec}>
            Homepage & General UI Issues
        </h2>
        <p className={styles.spec}>
            •Some testers found a bug on the homepage.<br />
            •The menu order list appeared clickable but was not, causing confusion.<br />
            •The keyboard did not retract automatically, making navigation frustrating.<br />
            •Some elements did not feel “smooth enough” or “unfinished.”<br />
        </p>
    </div>
</div>
