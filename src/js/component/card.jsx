import React from "react";


function Card(props) {
    return(
        <div className="card col-auto mx-2">
            <img src={props.src} className="card-img-top" alt="..." height={130}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Learn more</a>
            </div>
        </div>
    );
}

export default Card;