import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='mt-5'>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            <p>{books.length}</p>
            {
                books.map(book => <Book book={book}></Book>)
            }
        </div>
    );
};

export default Books;