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
                <p>Hi, I am a student at the University of Waterloo studying Computer Science and looking for Fall 2024 Co-ops.</p>
                <p>I have extensive experience with frontend languages such as React, JavaScript, HTML, CSS, but am also equally versed in C++, Python, SQL, PHP, and unfortunately, Racket...</p>
                <p>Within my degree, I have a passion for pure math, which a lot of projects actually draw inspiration from. Feel free to check out my past projects by navigating to the projects page!</p>
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
                        <p>This is mostly for if you want to hire me...</p>
                    </li>
                    <li>
                        <h4>Food Reviews (In progress)</h4>
                        <p>I will be trying a variety of food from pilk (Pepsi and milk) to normal food like pizza or jjajangmyeon and rating them on a scale of 1-10.</p>
                        <p>My rating scale is a UNIVERSAL scale with the average (5) being the price and taste of a Big Mac. Anything that is over 5 tastes better or is cheaper than a Big Mac, and anything under tastes worse or is more expensive than a Big Mac.</p>
                    </li>
                    <li>
                        <h4>Recipes (In progress)</h4>
                        <p>Being the only objectively correct food reviewer in the world, it also means that I am exceptionally talented when it comes to cooking. So, when it comes to creating new dishes/recipes, I can guarantee that you will find these original meals at least a solid 5.</p>
                        <p>From peanut butter mac and cheese to peanut butter broccoli cheddar soup to peanut butter jelly sandwiches. I can truly use almost any ingredient in the kitchen while also mastering any flavor profile known to man.</p>
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

                <h2>My Top 10 Goals for 2024</h2>
                <ol>
                    <li>Get better at cooking</li>
                    <li>Learn how to cross step on my longboard</li>
                    <li>Create an ML sentiment analysis for stocks</li>
                    <li>Exercise more</li>
                    <li>Create a navigation map app for the UW campus</li>
                    <li>Keep my plants alive</li>
                    <li>Make something artsy</li>
                    <li>Join the NBA</li>
                    <li>Run a 3-minute kilometer</li>
                    <li>Eat more fiber</li>
                </ol>

            </div>
        </div>
        </>
    );
}

export default About;
