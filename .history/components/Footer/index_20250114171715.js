.Footer {
    background-color: var(--yellow);
    padding: 1rem;
    text-align: center;
}

.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; /* Allow items to wrap to the next line on smaller screens */
}

.column {
    flex: 1; /* Each column will take equal width */
    padding: 0 10px; /* Optional: spacing between columns */
}

/* Media query for mobile screens */
@media (max-width: 768px) {
    .container {
        flex-direction: column; /* Stack columns vertically on small screens */
    }
    .column {
        width: 100%; /* Make each column take up the full width */
        padding: 10px 0; /* Add spacing for better readability */
    }
}
