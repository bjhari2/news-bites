import React from "react";

export default function Navbar() {
  return (
    <>
      <nav id="top" className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            <strong>
              News<span className="name-color">Bites</span>
            </strong>
          </a>
        </div>
      </nav>
    </>
  );
}
