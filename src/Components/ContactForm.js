// ContactForm.js
import React, { useState } from 'react';
import { db } from '../Firebase';
import { v4 as uuidv4 } from 'uuid';
import '../CSS/ContactForm.css'; // Import the CSS file for styling
import { ref, set } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUserNameInput = (e) => {
    setUsername(e.target.value);
  }
  const handleUserEmailInput = (e) => {
    setUserEmail(e.target.value);
  }
  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  }

  const wirteToDatabase = () => {
    if (username !== "" && userEmail !== "" && message !== "") {
      const uuid = uuidv4();
      set(ref(db, `/${uuid}`), {
        Name: username,
        Email: userEmail,
        Message: message,
      });

      setUsername("");
      setUserEmail("");
      setMessage("");

      toast.success("Your Message is Sent!");
    }else{
      toast.error("Invalid Input");
    }
  }
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={username} onChange={handleUserNameInput} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value={userEmail} onChange={handleUserEmailInput} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required value={message} onChange={handleMessageInput}></textarea>
        </div>
        <button type="submit" onClick={wirteToDatabase}>Submit</button>
      </form>
      <ToastContainer position='top-center' />
    </div>
  );
};

export default ContactForm;
