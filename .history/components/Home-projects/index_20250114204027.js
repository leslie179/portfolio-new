import styles from './Project.module.css'; // Import the CSS for Project
import Banner from './Banner'; // Import the Banner component

export default function Project() {
  return (
    <div className={styles.projectContainer}>
      {/* Project content goes here */}
      <div className={styles.projectContent}>
        <h1>My Project</h1>
        <p>This is the description of the project.</p>
        {/* More project content */}
      </div>

      {/* The Banner component placed after the content */}
      <Banner />
    </div>
  );
}
