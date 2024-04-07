// ContactPage.js
import React from 'react';
import ContactForm from '../Components/ContactForm';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <ContactForm />
            <Footer/>
        </div>
    );
};

export default ContactPage;
