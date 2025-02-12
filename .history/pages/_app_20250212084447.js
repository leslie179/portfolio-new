import PropTypes from "prop-types";
import "@/styles/globals.css"; // Ensure this path is correct

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// ✅ Define prop types
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
