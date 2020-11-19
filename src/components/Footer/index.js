import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//fonts from fontawesome
//https://fontawesome.com/icons/github
// <i class="fab fa-github"></i>
//https://fontawesome.com/icons/linkedin-in
// <i class="fab fa-linkedin-in"></i>

/*
function Footer() {
    const social = [
        {
            name: "fab fa-github",
            link: "https://github.com/suwanaloet",
            alt: "github icon"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/sean-suwanaloet-6626401aa/",
            alt: "linkedin icon"
        },
    ]

    return (
        <div>
            {social.map(social =>
                (
                    <a href={social.link}
                        key={social.name}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img alt={social.alt}
                            class={social.name}
                            href={social.link}>
                        </img>
                    </a>

                )
            )}
        </div>
    )

}
*/

function Footer() {

    return (
        <div className="footer">
            <div className="col-2" id="footerleft">
            
            </div>
            <div className="footerLinkedIn">
                <a href="https://www.linkedin.com/in/sean-suwanaloet-6626401aa/" target="_blank" rel="noopener noreferrer">
                    <img alt="LinkedIn" className="footer-image" src="https://raw.githubusercontent.com/suwanaloet/portfolio-assets/master/linkedinIcon.png" />
                </a>
            </div>

            <div className="footerGitHub">
                <a href="https://github.com/suwanaloet" target="_blank" rel="noopener noreferrer">
                    <img alt="GitHub" className="footer-image" src="https://raw.githubusercontent.com/suwanaloet/portfolio-assets/master/githubIcon.png" />
                </a>
            </div>
            <div className="col-1" id="footerright">

            </div>

        </div>

    


    )
}

export default Footer;
