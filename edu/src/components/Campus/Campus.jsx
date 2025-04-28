import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/windmill1upscaled-low resolution v2-6x.jpeg';
import gallery_2 from '../../assets/windmill2upscaled-low resolution v2-6x.jpg';
import gallery_3 from '../../assets/wind3.jpg';
import gallery_4 from '../../assets/windmill4upscaled-low resolution v2-6x.jpeg';
import icon from "../../assets/locationss.png";
import white_arrow from '../../assets/white-arrow.png';

const Campus = ({ subTitle, title }) => {
  return (
    <div className='campus' name='campus'>
      <p>{subTitle}</p>
      <h2>{title}</h2>

      <div className="gallery">
        <figure>
          <img src={gallery_1} alt="Gallery 1" />
          <figcaption>
            <img src={icon} alt="Icon" className="icon" />
            Nagercovil
          </figcaption>
        </figure>

        <figure>
          <img src={gallery_2} alt="Gallery 2" />
          <figcaption>
            <img src={icon} alt="Icon" className="icon" />
            Coimbatore
          </figcaption>
        </figure>

        <figure>
          <img src={gallery_3} alt="Gallery 3" />
          <figcaption>
            <img src={icon} alt="Icon" className="icon" />
            Salem
          </figcaption>
        </figure>

        <figure>
          <img src={gallery_4} alt="Gallery 4" />
          <figcaption>
            <img src={icon} alt="Icon" className="icon" />
            Madurai
          </figcaption>
        </figure>
      </div>

      <button className='btn btn1 dark-btn'>
        See More Here <img src={white_arrow} alt="Arrow" />
      </button>
    </div>
  );
};

export default Campus;
