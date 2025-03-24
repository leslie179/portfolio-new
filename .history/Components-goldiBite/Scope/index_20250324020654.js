import React from "react";
import style

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
    <div className="scope-container">
      <h2 className="title">Scope of work</h2>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.id} className="step">
            <img src={step.image} alt={step.title} className="step-image" />
            <div className="badge">{step.id}</div>
            <h3 className="step-title">{step.title}</h3>
            <ul className="step-tasks">
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
