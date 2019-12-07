import React, { createContext, useState, useEffect } from 'react';
import SpinnerPhoto from '../Spinner'

export const ImageContext = createContext();

const CenteralStore = (props) => {
	const [ photos, setphoto ] = useState(InitialValue);
	const [ currentPage, setCurrentPage ] = useState(1);
	const  [PhotoPerPage] = useState(6);
	const getPhotos = () => {
		let newPhoto = [];
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((result) => result.json())
			.then((data) => {
				console.log('Photos 1: ', photos);

				return data.filter((photo) => photo.id <= 60);
			})
			.then((result) => {
				result.map((res) => newPhoto.push(res));
				newPhoto = photos.concat(newPhoto);
				setphoto(newPhoto);
			});
	};
	useEffect(() => {
		 getPhotos();
				
	}, []);
	const indexOfLastPhoto = currentPage * PhotoPerPage;
	const indexOfFirstPhoto = indexOfLastPhoto - PhotoPerPage;
	const currentPhoto = photos.slice(indexOfFirstPhoto,indexOfLastPhoto);
	const totalNumberOfPhoto = photos.length 

	const PaginateSet =(number)=>{
setCurrentPage(number);
	}
const result = photos.length>3?<ImageContext.Provider value={{currentPhoto,PaginateSet ,PhotoPerPage,totalNumberOfPhoto }}>{props.children

}</ImageContext.Provider>:<SpinnerPhoto/>
	return <div>
		{result}
	
	</div>
};

export default CenteralStore;
const InitialValue = [
	{
		albumId      : 65,
		id           : 3204,
		title        : 'et dolorem eum',
		url          : 'https://via.placeholder.com/600/448c67',
		thumbnailUrl : 'https://via.placeholder.com/150/448c67'
	},
	{
		albumId      : 65,
		id           : 3205,
		title        : 'fugiat accusantium sequi id exercitationem vel facere ab',
		url          : 'https://via.placeholder.com/600/d9a7e3',
		thumbnailUrl : 'https://via.placeholder.com/150/d9a7e3'
	},
	{
		albumId      : 65,
		id           : 3206,
		title        : 'architecto maxime itaque pariatur nemo minima nulla',
		url          : 'https://via.placeholder.com/600/654ce7',
		thumbnailUrl : 'https://via.placeholder.com/150/654ce7'
	}
];
