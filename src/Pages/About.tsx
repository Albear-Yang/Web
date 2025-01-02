import Header from '../components/Header';
import Line1 from '../components/Line1';
import TitleNav from '../components/NavbarTitle';
import thumbNail from './aboutpic.png';
import './About.css';

function About() {
    return (
        <>
        <Header />
            <Line1 />
            <TitleNav />
            <Line1 />
        <div className="about-page">
            <div className="container">
                <h1>Albert Yang: UW CS Student, Amateur Chef and Eater</h1>
                <img src={thumbNail} id="mainPhoto" alt="Albert Yang" />

                <h2>Who am I?</h2>
                <p>Hi, I am a student at the University of Waterloo studying Computer Science and looking for Summer 2025 Co-ops.</p>
                <p>My last co-op was an AI/ML Engineering internship with the Sick Kids Hospital orthopaedic surgery division. There I independently researched and implemented various medical and ML techniques!</p>
                <p>I have extensive ML experience with Pytorch, Pyro and python as well as  JavaScript, HTML, CSS, C, C++, Python, SQL, and unfortunately, Racket...</p>
                <p>Within my degree, I have a passion for pure math and reinforced learning, which a lot of projects actually draw inspiration from. Feel free to check out my past projects by navigating to the projects page!</p>
                <p>Outside of my degree, my hobbies include longboard dancing (although I'm not very good), skateboarding, chess (feel free to play a blitz with me), and cooking!</p>

                <h2>Purpose of this website?</h2>
                <p>While a large portion of this website is to showcase my talents and projects in Computer Science, a good bulk of it will be for personal use. Here I'll be documenting my life through my personal blog, uploading new recipes I have discovered (my most famous being a chili oil peanut butter KD Mac and Cheese), or food reviews of restaurants and even my own cooking.</p>

                <h2>A closer look at what each page is going to entail</h2>
                <ul>
                    <li>
                        <h4>About</h4>
                        <p>The page you're looking at! This page has general info about me but also info about this website.</p>
                    </li>
                    <li>
                        <h4>Projects</h4>
                        <p>Take a look at my past projects! Where not only will I be showing them off, but also explaining my processes, tools, and techniques I used to get the end product.</p>
                    </li>
                    <li>
                        <h4>Resume</h4>
                        <p>This is mostly for if you want to hire me</p>
                    </li>
                    <li>
                        <h4>Misc (In progress)</h4>
                        <p>Here I will either be reviewing things that aren't food, or I will be talking about anything that crosses my mind.</p>
                    </li>
                    <li>
                        <h4>Contact</h4>
                        <p>Contact information! Feel free to reach out to me whether for internship opportunities, or simply questions about me or my amazing recipes.</p>
                    </li>
                </ul>

                <h2>My Top 10 Goals for 2025</h2>
                <ol>
                    <li>Exersize more</li>
                    <li>Get even better at cooking</li>
                    <li>Learn how to cross step on my longboard</li>
                    <li>Do leetcode everyday</li>
                    <li>Get a 4.0 GPA</li>
                    <li>Read more books</li>
                    <li>Keep my plants alive</li>
                    <li>Make something artsy</li>
                    <li>Eat even more fiber</li>
                    <li>Join the NBA</li>
                </ol>

                <h2>My Top 10 Goals for 2024</h2>
                <ol>
                    <li>Get better at cooking &check;</li>
                    <li>Learn how to cross step on my longboard</li>
                    <li>Create an ML sentiment analysis for stocks</li>
                    <li>Exercise more</li>
                    <li>Create a navigation map app for the UW campus</li>
                    <li>Keep my plants alive &check;</li>
                    <li>Make something artsy</li>
                    <li>Join the NBA</li>
                    <li>Run a 3-minute kilometer &check;</li>
                    <li>Eat more fiber &check;</li>
                </ol>

            </div>
        </div>
        </>
    );
}

export default About;
