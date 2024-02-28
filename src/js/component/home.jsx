import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

//create your first component
const Home = () => {
	return (
		<><Navbar />
		<div className="container-fluid col-10">
			<Jumbotron />
			<div className="card-group">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>

			<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div></>
	);
};

export default Home;
