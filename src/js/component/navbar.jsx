import React from "react";

function Navbar() {
    return(
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid bg-dark col-10 px-4">
                <a className="navbar-brand text-white">The Earth</a>
            <div className="d-flex">
                <a className="nav-link text-white px-1">Home</a>
                <a className="nav-link text-white px-1">Introduction</a>
                <a className="nav-link text-white px-1">Spheres</a>
                <a className="nav-link text-white px-1">Images</a>
    </div>
  </div>
</nav>
    );
}

export default Navbar;