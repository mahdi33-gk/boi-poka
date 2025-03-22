import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Bookdetail = () => {
    const {bookId} = useParams();
    const intId = parseInt(bookId)
    const data = useLoaderData()
    const book =data.find(book=> book.bookId === intId)
    
    
    return (
        <div>
            <div>
            <img className='w-20' src={book.image} alt="" />
            </div>
            <h1>Name: {book.bookName} </h1>
            <div className='flex gap-3'>
            <button class="btn btn-outline">Read</button>
            <button class="btn btn-accent text-white">WishList</button>
            </div>
        </div>
    );
};

export default Bookdetail;