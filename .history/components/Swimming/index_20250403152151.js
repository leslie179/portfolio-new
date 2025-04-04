/* Ensure Full-Screen Scaling */
html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
}

.pageWrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

/* Main Container */
.swimmingPool {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

/* Water Background */
.water {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.water img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Text */
.h1 {
    z-index: 1000000000;
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    color: black;
    font-family: 'NickySans', Arial, Helvetica, sans-serif;
    font-weight: 900;
    font-size: 2rem;
}

/* Swimming Girl Animation */
.swimmingGirl {
    position: absolute;
    z-index: 100;
    height: 25vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.08s cubic-bezier(0.37, 0, 0.63, 1);
}

.swimmingGirl img {
    object-fit: contain;
    height: 100%;
}

/* Rotation Animation */
@keyframes girlRotate {
    from {
        rotate: 0deg;
    }
    to {
        rotate: -25deg;
    }
}

/* Prevent unwanted horizontal scrolling */
* {
    box-sizing: border-box;
}
