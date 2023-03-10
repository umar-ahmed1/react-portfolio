import React from 'react'
import './Connect.css'
import { send } from 'emailjs-com'

export default function Connect() {
  const [emailInfo, setEmailInfo] = React.useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      emailInfo,
      process.env.REACT_APP_EMAILJS_API_KEY,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setEmailInfo({ ...emailInfo, [e.target.name]: e.target.value });
  }



  return (
    <div className="connect" id="connect">
      
      <div className="connect-content">
        <div className="connect-left">
          <div className="connect-header">Connect</div>
          <div>I am currently seeking internships for the 2023-2024 year. Lets connect!</div>
          <div className="phone-div">
            <div>Phone</div>
            <div>587-429-4194</div>
          </div>
          <div>LinkedIn</div>
          <div>Test</div>
        </div>
        <div className="connect-right">
          <div className="connect-header">Email Form</div>
          <form className="email-form" onSubmit={onSubmit}>
            <div>Your Name</div>
            <input
              type='text'
              name='from_name'
              placeholder='Your Name'
              value={emailInfo.from_name}
              onChange={handleChange}
            />
            <div>Your Email</div>
            <input
              type='text'
              name='reply_to'
              placeholder='Your Email'
              value={emailInfo.reply_to}
              onChange={handleChange}
            />
            <div>Your Message</div>
            <input
              type='text'
              name='message'
              placeholder='Your message'
              value={emailInfo.message}
              onChange={handleChange}
            />   
            <button type='submit'>Submit</button>
          </form>
        </div>
        
      </div>
      

      

    </div>
  )
}
