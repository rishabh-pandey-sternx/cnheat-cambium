import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { map } from 'lodash';
import { useSelector } from 'react-redux';


const List = ({ data }) => {
	return (
		<>
			{map(data, ({ image, text }, idx) => (
				<ListItem key={idx} image={image} text={text} index={idx} />
			))}
		</>
	);
};

const ListItem = ({ image, text, index }) => {
	const opacity = useSelector((state) => state.rootState.opacity);
	return (
		<Col key={index}>
			<Card>
				<Card.Img variant="top" src={image} style={{ opacity: opacity, width:'30%' }} />
				<Card.Body>
					<Card.Text>{text}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

const ImageCard = ({ data, search }) => {
	return (
		<Row xs={1} md={3} className="p-3 g-4">
			{search ? (
				<List
					data={data?.filter((el) =>
						el.text.toLowerCase().includes(search.toLowerCase()),
					)}
				/>
			) : (
				<List data={data} />
			)}
		</Row>
	);
};

export default ImageCard;
