import React, { useContext } from 'react';
import './pagination.css'
import  {ImageContext}  from '../context/CenteralStore';

const Paginate = () => {
    const {PhotoPerPage,PaginateSet,totalNumberOfPhoto} = useContext(ImageContext);
   
    const pageNumber=[];
    for(let i=1; i<=Math.ceil(totalNumberOfPhoto/PhotoPerPage);  i++){
 pageNumber.push(i);
    }
   
    return (
        <div>
            <ul className='pagination'>
                { pageNumber.map(number=> (

               <li key={number} className='page-item'>
                   <a onClick={() => PaginateSet(number)} href="#" className='page-link'>
                             {number}
                    </a>
                </li>
                    
                    )
                )}
            </ul>
        </div>
    )
}

export default Paginate;