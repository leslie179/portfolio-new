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













