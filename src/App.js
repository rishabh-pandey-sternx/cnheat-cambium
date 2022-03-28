import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import ImageCard from './components/ImageCard';
import Loader from './components/Loader';
import SearchBar from './components/SearchBar';
import SideMenu from './components/SideMenu';
import { fetchApiData } from './app/reducer';

const App = () => {
	// destructure from root state
	const { loading, search, categories, opacity, activeData,activeTab } = useSelector(
		(state) => state.rootState,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchApiData());
	}, []);

	return (
		<Container fluid>
			{loading ? (
				<Loader />
			) : (
				<>
					<Row>
						<Col className="p-3 border border-dark">
							<SearchBar search={search} />
						</Col>
					</Row>
					<Row className="vh-100">
						<Col xs={4} className="border border-top-0 border-dark">
						<SideMenu
								categories={categories}
								opacity={opacity}
								currentTab={activeTab}
							/>
						</Col>
						<Col>
							<ImageCard data={activeData} search={search} />
						</Col>
					</Row>
				</>
			)}
		</Container>
	);
};

export default App;
