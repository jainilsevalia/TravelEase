import React, { useState, useEffect } from 'react';
import './liveUpdateImage.css';

const LiveUpdates = (props) => {
	const [model, setModel] = useState(false);
	const toggleModel = () => {
		setModel(!model);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log('Inside Use effect');
			console.log(model);
			if (model === true) setModel(false);
		}, 5000);

		return () => clearTimeout(timer);
	}, [model]);

	return (
		<div className="live_update_div">
			<img
				onClick={toggleModel}
				className="live_update_pic"
				src={props.live_update_url}
				alt="No live update available"
			></img>
			{model && (
				<div className="model">
					<div
						onClick={toggleModel}
						className="overlay"
					></div>
					<span onClick={toggleModel}>&times;</span>
					<img
						src={props.live_update_url}
						alt="No profile pic available"
					></img>
				</div>
			)}
		</div>
	);
};

export default LiveUpdates;
