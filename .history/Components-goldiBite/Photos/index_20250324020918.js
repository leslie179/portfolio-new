import React from "react";
import styles from "./Scope.module.css"; // Import the CSS module

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
      image: "/images/discovery.png", // Replace with actual image paths
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
        {steps.map((step) => (
          <div key={step.id} className={styles.step}>
            <img src={step.image} alt={step.title} className={styles.image} />
            <div className={styles.badge}>{step.id}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <ul className={styles.taskList}>
              {step.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scope;
