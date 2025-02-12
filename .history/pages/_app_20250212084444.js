import PropTypes from "prop-types";
import "@/styles/globals.css"; // Ensure this path is correct

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// ✅ Define prop types
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
