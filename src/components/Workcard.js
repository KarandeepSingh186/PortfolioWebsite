import React from 'react';
import { NavLink } from 'react-router-dom';
import './WorkcardStyles.css';

const Workcard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="IntroImg" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>

          <NavLink to={props.sourcecode} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
