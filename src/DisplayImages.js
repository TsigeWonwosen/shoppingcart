import React from 'react';
import Images from './Images';
import CenteralStore from './context/CenteralStore';
import Paginate from './componts/Paginate'
const DisplayImages = (props) => {
	return (
		<CenteralStore>
			<Images />
			<Paginate />
		</CenteralStore>
	);
};

export default DisplayImages;
