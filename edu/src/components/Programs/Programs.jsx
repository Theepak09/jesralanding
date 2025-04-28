import React from 'react';
import './Programs.css';
import program_1 from "../../assets/windmillupscaled-cgi-6x.jpg";
import program_2 from '../../assets/windmallmaintanceupscaled-cgi-6x.jpeg';
import program_3 from '../../assets/finaldesignsales.png';
import program_icon_1 from '../../assets/development.png';
import program_icon_2 from '../../assets/maintanance.png';
import program_icon_3 from '../../assets/acquisition.png';

const Programs = () => {
  return (
    <div className='programs' name='programs'>
      <div className="program">
        <img src={program_1} alt="Graduation Degree Program" />
        <div className="caption">
          <img src={program_icon_1} alt="Graduation Degree Icon" />
          <p>Wind Farm Development</p>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="Masters Degree Program" />
        <div className="caption">
          <img src={program_icon_2} alt="Masters Degree Icon" />
          <p>Wind Energy Equipment & Maintenancee</p>
        </div>
      </div>

      <div className="program">
        <img src={program_3} alt="Post Graduation Program" />
        <div className="caption">
          <img src={program_icon_3} alt="Post Graduation Icon" />
          <p>Windmill Sales and Services</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;