import React, { useState } from 'react';
import Nav from '../Navigation';
import About from '../Pages/About';
import Projects from '../Project/index.js';
import Contact from '../Pages/Contact';
import Resume from '../Pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header(props) {

    const [currentPage, handlePageChange] = useState('About');



    const renderPage = () => {

        switch (currentPage) {
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

    };

    return (
        <div>
            <h1 id="aboutName" className="text-left">Sean Suwanaloet</h1>
            <div className="nav">
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

            </div>
            <div>
                {
                    renderPage()
                }
            </div>

        </div>
    );
}

export default Header;