import React from "react";
import ReactDOM from 'react-dom/client'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Navbar} from"./Navbar"
import {Jumbotron} from"./Jumbotron"
import {Card} from"./Card"
import {Footer} from"./Footer"


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div className="d-flex justify-content-around pt-4">
			<Card title='Sun' imageUrl='https://cdn.pixabay.com/photo/2025/09/10/02/15/girl-9825347_640.jpg' description="Just taking the sun" buttonUrl="clickhereifyouwannasee.more/Sun" buttonLabel="Find out more!"/>
			<Card title='Street' imageUrl='https://cdn.pixabay.com/photo/2022/09/12/12/15/netherlands-7449282_640.jpg' description="Afternoon in the street" buttonUrl="clickhereifyouwannasee.more/Street" buttonLabel="Find out more!"/>
			<Card title='Sky' imageUrl='https://cdn.pixabay.com/photo/2025/08/21/13/58/hot-air-balloon-9788005_640.jpg' description="View from the sky somewhere" buttonUrl="clickhereifyouwannasee.more/Sky" buttonLabel="Find out more!"/>
			<Card title='Bird' imageUrl='https://cdn.pixabay.com/photo/2024/11/02/22/50/bird-9170229_640.jpg' description="The little bird having some lunch" buttonUrl="clickhereifyouwannasee.more/Bird" buttonLabel="Find out more!"/>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
