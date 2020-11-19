import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
//FOR REFERENCE
/*  const [sections] = useState([
    {
      name: 'about me'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);
*/

//mirror nav from lesson

function Nav(props) {

  
  const navElements = ['About', 'Projects', 'Contact', 'Resume'];


  return (
    <nav>
      <ul className="nav">
        {navElements.map((ele) => (
          <li className="" key={ele}>
            <a href={'#' + ele}
            onClick={() => props.handlePageChange(ele)}
            className={
              props.currentPage === ele ? 'nav-link active' : 'nav-link'
              }
            >
              {ele}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );


}

export default Nav