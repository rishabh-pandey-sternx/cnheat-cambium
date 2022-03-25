import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
	return (
		<div className="d-flex vh-100 justify-content-center align-items-center">
			<Spinner animation="grow" variant="primary" />
			<p>Loading...</p>
		</div>
	);
};

export default Loader;
