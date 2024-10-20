// ContactPage.js
import React from 'react';
import ContactForm from '../Components/ContactForm';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaPhone } from "react-icons/fa6";
import CallIcon from '../Components/CallIcon';
import img9 from '../Images/img9.png';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <Navbar />
            <div className="maps">
                <div>
                    <p>
                        Shop No. 11, Salasar Commercial Center, Phatak Road, Opp. Dharam Kata, Bhayander(E)-401105
                    </p>
                    <p>
                        <FaPhone />
                        <a href="tel:+919819294989">9819294989</a>/
                        <a href="tel:+919322073448">9322073448</a>/
                        <a href="tel:+919869079495">9869079495</a>
                    </p>
                </div>
                <img src={img9} alt="" />
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.35311921785788!2d72.85602315636794!3d19.29758495843258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b149921947db%3A0x153a2ef45f0a1595!2sI%20-%20Bankon%20Gold%20Trading%20LLP%20%7C%20Gold%20Loans%20%7C%20Gold%20Overdraft%20%7C%20Gold%20Buy%20And%20Sell!5e0!3m2!1sen!2sin!4v1712479500005!5m2!1sen!2sin" width="600" height="450" style={{ border: "2px solid #818181" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='I-bankon'></iframe> */}
            </div>

            <ContactForm />
            <CallIcon/>
            <Footer />
        </div>
    );
};

export default ContactPage;
