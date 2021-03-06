import React from "react";
import { Link } from "react-router-dom";
import './Success.css'

const Success = () => {
  return (
    <div id="success">
      <div className="error_container">
        <h1>
          <i className="fas fa-check-double"></i>
        </h1>
        <h2>Your message has been sent</h2>
        <p>
          I will get back to you shortly, thanks for reaching out. {" "}
        </p>
        <div className="go_button_container" style={{ display: "flex" }}>
        <Link to="/">
            <button>DashBoard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
