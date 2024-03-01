import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import img1 from "../../img/clouds-3488632_1280.jpg"
import img2 from "../../img/danube-river-7522608_1280.jpg"
import img3 from "../../img/deer-643340_1280.jpg"
import img4 from "../../img/sandstones-53637_1280.jpg"
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const spheres = [{src:img4, title:"Geosphere", text:"The geosphere is the all the rocks of the Earth."},{src:img1, title:"Atmosphere", text:"The atmosphere is the all the gases around the Earth."},{src:img2, title:"Hidrosphere", text:"The hidrosphere is the all the water of the Earth"},{src:img3, title:"Biosphere", text:"The biosphere is the all the living beings of the Earth"}];

const arrCards = spheres.map((item) => <Card src={item.src} title={item.title} text={item.text} />)

const Home = () => {
	return (
		<><Navbar />
			<div className="container-fluid col-10">
				<Jumbotron />
				<div className="card-group">
				{arrCards}
				</div>
			</div>
		<Footer/></>
	);
};

export default Home;
