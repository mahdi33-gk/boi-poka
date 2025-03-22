import React from 'react';
import { useParams } from 'react-router-dom';

const Bookdetail = () => {
    const {bookId} = useParams();
    return (
        <div>
            <h1>bookDetails {bookId}</h1>
        </div>
    );
};

export default Bookdetail;