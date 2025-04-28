import React from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import { useRef } from 'react';

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  

  }

  const slideBackward = () => {

    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;


  }
  return (
    <div className="testimonials-container" name='testimonials'>
      <div className="testimonials">
        <img src={back_icon} alt="back-icon" className="back-icon" onClick={slideBackward}/>
        <img src={next_icon} alt="next-icon" className="next-icon" onClick={slideForward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="User 1" />
                  <div>
                    <h3>William</h3>
                    <span>Coimbatore, Tamil Nadu</span>
                  </div>
                </div>
                <p>
                "Jesra's wind solutions helped us reduce our energy costs by over 40%. Their team is professional, responsive, and technically sound."
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="User 2" />
                  <div>
                    <h3>Yogeshwaran</h3>
                    <span>Salem, Tamil Nadu</span>
                  </div>
                </div>
                <p>
                  "From site analysis to turbine installation, Jesra handled everything seamlessly. We’re proud to partner with a company that truly delivers on sustainability."
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="User 3" />
                  <div>
                    <h3>Samantha</h3>
                    <span>Pune, Maharastra</span>
                  </div>
                </div>
                <p>
                  "Their team understood our unique needs and offered a reliable wind power setup. It's been a game changer for our operations."
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="User 4" />
                  <div>
                    <h3>Ramesh</h3>
                    <span>Thoothukudi, Tamil Nadu</span>
                  </div>
                </div>
                <p>
                "Jesra gave us the confidence to shift to wind energy. Their system performance and after-sales support are top-notch. have truly exceeded my expectations."
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;