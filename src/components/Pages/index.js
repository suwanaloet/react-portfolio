import React from 'react';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Projects from '../Project';

function Sections({ currentSection }) {

    const render = () => {
        switch (currentSection) {
            case 'About':
                return (<About></About>)
            case 'Projects':
                return (<Projects></Projects>)

            case 'Contact':
                return (<Contact></Contact>)

            case 'Resume':
                return (<Resume></Resume>)

            default:
                return (<About></About>)
        }
    }

    return (
        <div>
            <h3>{(currentSection.name)}</h3>
            <div>
                {render}
            </div>
        </div>
    )
}

export default Sections;