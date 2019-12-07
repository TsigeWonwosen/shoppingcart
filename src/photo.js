import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';
import './App.css';

const Photo = (props) => {
	const { img } = props;
	return (
		<React.Fragment className="shadow p-3 mb-5 bg-white rounded">
		<Card  className="cardStyle" bg="secondary" text="white" style={{ width: '18rem',padding:"10px" }}>
       
		<CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Photo Id {img.id}</CardSubtitle>
        </CardBody>
        <CardImg variant="top"  width="70%" src={img.url} alt={img.albumId} />
        <CardBody>
          <CardText>{img.title}t.</CardText>
          <CardLink href="#">Card Link</CardLink>
        
        </CardBody>
		 <Button color="primary">Button</Button>
      </Card>
		</React.Fragment>
	);
};

export default Photo;
