import React from "react";

// if you dont want to use props..  then  bwow code
// const Nabvar = (props) => {
const Nabvar = ({ totalCounter }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-md">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill text-info">{totalCounter}</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nabvar;
