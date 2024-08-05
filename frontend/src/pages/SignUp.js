import React from 'react';
import Navbar from '../components/Navbar';
import Iframe from 'react-iframe';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSeQ1LBJGfV7QXo4ssk-ArggFm6_5DydiyIHX37NsBZaL5Ce2g/viewform"
        width="100%"
        height="1000px"
        id="google-form"
        className="google-form"
        display="initial"
        position="relative"
      />
    </div>
  );
};

export default SignUp;
