import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Iframe from 'react-iframe';

import $ from 'jquery';

class BlockAboutUs extends Component {
	constructor(props) {
		super(props);
		this._pagemain_ = props.simp;
		const drupalService = props.drupalService;
		this.state = {
			data: []
		}
		drupalService.getAboutUsBlock()
			.then(res => {
				let responseData = res.data;
				console.log("Response Data:- ", responseData)
				this.setState({
					data: responseData
				});
			});
		this.data = this.props.data.aboutus;
		var quote;
		var mission;
		var vision;
		if (!this._pagemain_) {
			quote = this.props.data.quote;
			mission = this.props.data.mission;
			vision = this.props.data.vision;
		}
		this.quote = quote;
		this.mission = mission;
		this.vision = vision;


	}

	render() {
		const quote = this.quote;
		const mission = this.mission;
		const vision = this.vision;
		let content = null;
		if (!!this.state.data.length) {
			const data = this.state.data[0];
			content = (this._pagemain_ ? <BlockAboutusSimp data={data} /> : <BlockAboutusDetailed data={data} quote={quote} mission={mission} vision={vision} />);
		}
		return (
			<>
				{content}
			</>

		);
	}
}

function BlockAboutusDetailed(props) {
	return (
		<>
			<TitleDescParent>
				<Description description={props.data.description} subtitle={props.data.subtitle} />
			</TitleDescParent>
			<Explanatoryvideo data={props.data.media} />
			<Quote data={props.quote} />
			<Mission data={props.mission} />
			<Vision data={props.vision} />*/

		</>
	);
}


function BlockAboutusSimp(props) {
	console.log("Props Data:- ", props.data)
	return (
		<>
			<TitleDescParent>
				<Title name={"About Us"} />
				<Description description={props.data.field_body[0].processed} subtitle={props.data.field_headline[0].value} />
			</TitleDescParent>
			{/* <Stats stats={props.data.stats} /> */}
		</>
	);
}

function Title(props) {
	return (
		<div className="section-title col-md-4 col-6 offset-3 offset-md-4 text-center">
			<h2 className="oswald-font-style">{props.name}</h2>
		</div>
	);
}

function TitleDescParent(props) {
	return (
		<div className="container mt-5" id="aboutus">
			<div className="row">
				{props.children}
			</div>

		</div>
	);
}

function Quote(props) {
	return (
		<div className="quote-1 background-fixed">
			<div className="container">
				<div className="row quote-text">
					<div className="col-12 text-center text-white mt-5 align-self-end">
						<h1 className="align-self-center">"{props.data.quote}"</h1>
					</div>
					<div className="offset-7 col-5 offset-md-8 col-md-4 text-muted mb-5">
						<p>{props.data.author}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

function Description(props) {
	return (

		<div className="col-12 section-content" >

			<h3 className="oswald-font-style text-center">{props.subtitle}</h3>
			<br />
			<p className="text-dark text-center text-md-left" dangerouslySetInnerHTML={{__html: props.description}}></p>
		</div>

	);
}

class Stats extends Component {
	constructor(props) {
		super(props);
		this.stats = props.stats;
		this.counts = this.stats.map((stat) => stat.count);
		this.timer = 1000;
		this.step = 50;
		var countdown = this.stats.map(() => 0);
		this.state = {
			countdown: countdown
		}
	}


	componentDidMount() {
		var step = this.step;
		var timer = this.timer;
		var stepscount = (timer / step);
		var counts = this.counts;
		this.interval = setInterval(() => {
			if (isScrolledIntoView("#stats")) {
				var increment = this.state.countdown.map((item, i) => item + Math.floor(counts[i] / stepscount));
				if (!(increment[0] >= counts[0])) {
					this.setState(
						{ countdown: increment }
					);
				}
				else {
					this.setState(
						{ countdown: this.counts }
					);
					clearInterval(this.interval);
				}
			}
		}, this.step);
	}

	render() {

		const stats = this.stats;
		const titles = stats.map((stat) => stat.title);
		const counts = this.state.countdown;
		return (
			<div className="container-fluid text-white stat-background py-5 statistics oswald-font-style" id="stats">
				<div className="row">
					<div className="col-6 col-md-3 text-center">
						<h1 className="counter">{counts[0]}<span className="plus-sign">+</span></h1>
						<p className="oswald-font-style">{titles[0]}</p>
					</div>

					<div className="col-6 col-md-3 text-center">
						<h1 className="counter">{counts[1]}<span className="plus-sign">+</span></h1>
						<p className="oswald-font-style">{titles[1]}</p>
					</div>

					<div className="col-6 col-md-3 text-center">
						<h1 className="counter">{counts[2]}<span className="plus-sign">+</span></h1>
						<p className="oswald-font-style">{titles[2]}</p>
					</div>

					<div className="col-6 col-md-3 text-center">
						<h1 className="counter">{counts[3]}<span className="plus-sign">+</span></h1>
						<p className="oswald-font-style">{titles[3]}</p>
					</div>


				</div>
			</div>
		);
	}
}

function Mission(props) {
	return (
		<div className="container mt-5" id="mission">
			<div className="row">
				<div className="section-title col-md-4 col-6 offset-3 offset-md-4 text-center">
					<h1 className="oswald-font-style">{props.data.name}</h1>
				</div>
				<div className="col-12 section-content">
					<h3 className="oswald-font-style text-center">{props.data.description}</h3>
				</div>
			</div>
		</div>);
}
function Vision(props) {
	return (
		<div className="container mt-5" id="vision">
			<div className="row">
				<div className="section-title col-md-4 col-6 offset-3 offset-md-4 text-center">
					<h1 className="oswald-font-style">{props.data.name}</h1>
				</div>
				<div className="col-12 section-content">
					<h3 className="oswald-font-style text-center">{props.data.description}</h3>
				</div>
			</div>
		</div>
	);
}

function Explanatoryvideo(props) {
	return (
		<div className="container text-center align-items-center iframeheight">
			<Iframe width="100%" height="90%" url={props.data} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
		</div>
	);
}
function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();
	if (!!$(elem).offset()) {
		var elemTop = $(elem)?.offset()?.top;
		var elemBottom = elemTop + $(elem)?.height();
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	else {
		return false;
	}
}
export default BlockAboutUs;