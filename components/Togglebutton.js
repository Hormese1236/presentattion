import React from "react";

const Togglebutton = ({ label,disabled }) => {
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input disabled={disabled} type="checkbox" className="checkbox" 
               name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default Togglebutton;




