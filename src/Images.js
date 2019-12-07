import React, { useContext } from 'react';
import { ImageContext } from './context/CenteralStore';

import { CardColumns 
} from 'reactstrap';
import Photo from './photo';
const Images = (props) => {
	const { currentPhoto } = useContext(ImageContext);
	const IMG = currentPhoto.map((img) => {
		return <Photo img={img} key={img.id} />;
	});

	return (
		 <CardColumns style={{marginTop:"20px"}}>
			{IMG}
		</CardColumns>
	);
};
export default Images;
