import React from 'react';

const Card = () => <div className='card'></div>;

const App = () => {
	return (
		<div className='page'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<Card />
					</div>
					<div className='col-half'>
						<Card />
					</div>
					<div className='col-half'>
						<Card />
					</div>
					<div className='col-third'>
						<Card />
					</div>
					<div className='col-third'>
						<Card />
					</div>
					<div className='col-third'>
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
