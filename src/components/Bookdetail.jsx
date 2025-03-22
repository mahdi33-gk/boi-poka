import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Bookdetail = () => {
    const {bookId} = useParams();
    const intId = parseInt(bookId)
    const data = useLoaderData()
    const book =data.find(book=> book.bookId === intId)
    
    return (
        <div>
            <h1>bookDetails {bookId}</h1>
        </div>
    );
};

export default Bookdetail;