// src/pages/_app.js

import '../styles/index.css'; // Import global styles
import Navbar from '../components/Navbar'; // Common Navbar component

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar />  Render Navbar on every page */}
      <Component {...pageProps} /> {/* Render the page component */}
    </>
  );
}

export default MyApp;
