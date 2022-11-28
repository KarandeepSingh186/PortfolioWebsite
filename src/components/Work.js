import React from 'react';
import Workcard from './Workcard';
import WorkcardData from './WorkcardData';
import './WorkcardStyles.css';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkcardData.map((val, ind) => {
          return (
            <Workcard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              sourcecode={val.sourcecode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
