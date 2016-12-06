//Libs
import React from 'react';
import ReactDOM from 'react-dom';

var PLAYERS = [
	{
		name: "Katy Morris",
		score: 34,
	},
		{
		name: "Ron Morris",
		score: 67,
	},
		{
		name: "Hugin Morris",
		score: 98,
	},
]

function Header(props) {
	return (
			<div className="header">
				<h1>{props.title}</h1>
			</div>
		);
}
Header.propTypes = {
		title: React.PropTypes.string.isRequired,
	}

function Player(props) {
	return (
		<div className="player">
			<div className="player-name">
			{props.name}
			</div>
			<Counter score={props.score} />
		</div>
		)
}
Player.propTypes = {
	name: React.PropTypes.string.isRequired,
};

function Counter(props) {
	return (
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<div className="counter-score">{props.score}</div>
				<button className="counter-action increment"> - </button>
			</div>
		)
}
Counter.propTypes = {
	score: React.PropTypes.string.isRequired,
}
function Application(props) {
	return (
		<div className="scoreboard">
		<Header title={props.title} />
			<div className="players">
				<Player name="Katy Morris" score={85} />
				<Player name="Ron Morris" score={33} />
			</div>
		</div>
		);
}
	Application.propTypes = {
		title: React.PropTypes.string,
		players: React.PropTypes.arrayOf(React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
			score: React.PropTypes.number.isRequired,
		})).isRequired,
	};

	Application.defaultProps = {
		title: "Scoreboard",
	}

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));