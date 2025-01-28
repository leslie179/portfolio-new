import styles from './About.module.css';

const About = () => {

    return (
        <div>
            <div class="gridContainer">
                <div class="imageTop">
                    <img src="/path/to/your/first-image.jpg" alt="Leslie with a drink" />
                </div>
                <div class="textContent">
                    <h1>Hi, I'm Leslie!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida eros nec dui scelerisque, sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
                    <p>Sit amet viverra nulla venenatis. Aliquam erat volutpat.</p>
                </div>
                <div class="imageBottom">
                    <img src="/path/to/your/second-image.jpg" alt="Leslie with a dog" />
                </div>
            </div>

        </div>
    );
};

export default About;