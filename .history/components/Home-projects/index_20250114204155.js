import styles from './HomeProjects.module.css'; // Import Project's CSS
import Banner from '../Banner'; // Import the Banner component

export default function Project() {
  return (
    <div className={styles.projectContainer}>
      {/* Project content goes here */}
      <div className={styles.projectContent}>
        <h1>My Project</h1>
        <p>This is the description of the project.</p>
        {/* More project content */}
      </div>

      {/* The Banner component placed at the bottom of the project */}
      <Banner />
    </div>
  );
}
