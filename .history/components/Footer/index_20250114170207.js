import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <footer className={styles.Footer}>
            /* global.css or a CSS module */
.container {
  display: flex;
  gap: 16px; /* Space between columns */
}
.column {
  flex: 1; /* Equal width for each column */
  background-color: #f0f0f0; /* Example styling */
  padding: 16px;
  text-align: center;
}
        </footer>
    )
}