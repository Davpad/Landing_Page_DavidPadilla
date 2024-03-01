import React from "react";


function Jumbotron() {
    return(
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">The Earth</h1>
            <p className="col-md-8 fs-4">The earth is our planet. It's divided in four layers or spheres that interact with each other. Due to this interactions, many of the phenomenom that affect the earth happen.</p>
            <button className="btn btn-primary btn-lg" type="button">Learn more</button>
        </div>

    );
}

export default Jumbotron;