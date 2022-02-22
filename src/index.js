import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";

ReactDOM.render(
    <div>
     <App />
     <Note />
     <Footer />
    </div>,
    document.getElementById("root")
);