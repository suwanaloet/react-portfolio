import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    const coverImage = "https://raw.githubusercontent.com/suwanaloet/portfolio-assets/master/23660477_1745203188823896_1504718687_o.jpg"
    return (
        <section className="aboutSection">
            
            <div className="bannerContainer">
                <img className="banner" src="https://raw.githubusercontent.com/suwanaloet/portfolio-assets/master/piano-3775191_1920.jpg" />
            </div>

            <div className="container">
                <div id="aboutContent" className="row">

                    <div className="aboutText col-7">
                        <h3>About Me:</h3>
                        <p>
                            Aspiring web developer, law student, musician, arranger and composer, eager to help you with whatever you may need!
                        </p>
                        <p>
                            Want to learn more about how i can be useful to your orgainzation? Head over to the "Resume" and "Projects" pages, and if you see something you like, head over to the "Contacts" page and let me know!
                        </p>
                    </div>

                    <div className="col-4">
                        <img src={coverImage} className="mainPhoto" alt="cover photo: piano at christmas time" />
                    </div>



                </div>
            </div>

        </section>
    );
}

export default About
