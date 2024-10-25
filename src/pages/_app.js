import '../styles/index.css'; // Import global styles
import Navbar from '../components/Navbar'; // Common Navbar component
import PropTypes from 'prop-types'; // Import PropTypes for props validation
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <nav className='container mx-auto px-8'>
      <Navbar /> {/*Render Navbar on every page*/}
    </nav>
      <Component {...pageProps} /> {/* Render the page component */}
    </>
  );
}

// Define prop types
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
