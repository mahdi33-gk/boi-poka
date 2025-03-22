import React from 'react';

const Book = ({book}) => {
    const {bookName} = book;
    return (
        <div>
            <h3>{bookName}</h3>
        </div>
    );
};

export default Book;