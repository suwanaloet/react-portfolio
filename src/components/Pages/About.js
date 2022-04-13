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
                            Want to learn more about how I can be useful to your orgainzation? Head over to the "Resume" and "Projects" pages, and if you see something you like, head over to the "Contacts" page and let me know!
                        </p>
                        
                        <p>
                            
                        </p>
                        <h4> Biographical Statement: </h4>
                        <p>
                            Sean Suwanaloet is a solo practitioner in the areas of indigent criminal defense and immigration law. He is based in Walnut, CA and practices in California and Arizona. Attorney Suwanaloet lives a life dedicated to public service and is eager to help where he capably can. 
                        </p>
                        <p>
                            Sean has long held a passion for his community and continues to be an active volunteer. He serves in disaster with an international aid organization, as a tutor for troubled youth with School on Wheels, a tutor for Marine prospects with RSS La Puente, and in general community engagement as co-founder and technical lead for Walnut NextGen. He has also been as a veterans historian with grassroots participation in the Veterans History Project and is one of the local historians of the Pomona Valley. 
                        </p>
                        <p>
                            Attorney Suwanaloet graduated from the University of Wisconsin Law School in 2023 and began his practice serving as an Arizona Public Defender for three years. Having since returned to California, he is currently seeking to rebuild his community roots and pursue new opportunities to serve. 
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
