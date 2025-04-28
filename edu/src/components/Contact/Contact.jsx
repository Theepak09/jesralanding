import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5e140f43-1d42-4d4a-86c9-e7508ca8010a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
        <div className="contact" name='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out to us through the contact form or find our contact details below. Your inquiries, feedback, and suggestions are valuable to us as we work towards delivering innovative, reliable, and sustainable wind energy solutions across India.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />jesragreenenergy@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 99443 78487</li>
                    <li><img src={location_icon} alt="" />Jesra Green Energy Developers, 9/139S, Rakshana Apartment, Kavalkinaru,<br/> Opp.To Rajas Dental College, Tirunelveli, Tirunelveli, Tamil Nadu, 627105</li>

                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter your Name' required />
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your Phone Number' required/>
                    <label>Enter your Messages here</label>
                    <textarea name='message' rows="6" placeholder='Enter your Message' required />
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>


                </form>
                <span>{result}</span>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
