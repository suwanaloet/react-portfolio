import React, { useState } from "react";
import projectList from './projectList.json';
import 'bootstrap/dist/css/bootstrap.min.css';

/* format reminder
   {
        "id": 1,
        "name": "run-buddy",
        "title": "Run Buddy",
        "github": "https://github.com/suwanaloet/run-buddy",
        "image": "https://raw.githubusercontent.com/suwanaloet/portfolio-assets/master/run-buddy.png",
        "alt": "run buddy application picture, signup and navbar",
        "description": "Website that offers fitness training services, built with HTML and CSS",
        "deploy": "https://suwanaloet.github.io/run-buddy/"
        
    },
*/

//render as cards centered
//call as props 
function ProjectsWrapper(props) {
    return (
        <div className="container">

            <div className="projectContainer card">
                <h3 className="projectTitle">{props.title}</h3>
                <div>
                    <div className="descriptionWrapper">
                        <p>
                            {props.description}
                        </p>
                        <a href={props.github} target="_blank" rel="noopener noreferrer">See the github page!</a>
                        <div>
                            <a href={props.deploy} target="_blank" rel="noopener noreferrer">See the deployed application!</a>
                        </div>
                    </div>
                    <br></br>
                    <img alt={props.alt}
                        src={props.image}
                        description={props.description}

                        className="card-img"
                    />
                </div>


            </div>
            <br></br>
        </div>
    );
}

//1st layer to pass the projects as props and break back down
function PropContainer(props) {
    return <div className="">
        {props.children}
    </div>;
}

//call the functions and map through them to see projects
//pull data from json file, send to projectwrapper, cycle through in container
function Projects() {
    const [Projects, setProjects] = useState(projectList);


    const render = (projectList) => {
        return (
            <ProjectsWrapper
                id={projectList.id}
                name={projectList.name}
                title={projectList.title}
                github={projectList.github}
                image={projectList.image}
                alt={projectList.alt}
                description={projectList.description}
                deploy={projectList.deploy}
            />
        )
    }

    return (
        <PropContainer>
            <h1 className="pageHeader">Featured Projects</h1>
            {Projects.map((projectList) => (
                render(projectList)
            ))}
        </PropContainer>
    );
}

export default Projects;