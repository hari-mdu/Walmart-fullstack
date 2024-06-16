import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM for Concurrent Mode
import App from "./App.jsx"; // Import the root component of the application
import "./index.css"; // Import global CSS styles
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import { Provider } from "react-redux"; // Import Provider to connect Redux store
import store from "./state/store/store.js"; // Import the Redux store

// Use ReactDOM.createRoot for Concurrent Mode rendering
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* Wrap the app in BrowserRouter for routing */}
    <Provider store={store}> {/* Wrap the app in Provider to connect Redux store */}
      <App /> {/* Render the root component of the application */}
    </Provider>
  </BrowserRouter>
);
