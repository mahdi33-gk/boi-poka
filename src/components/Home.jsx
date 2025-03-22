import React from "react";
import books from '../images/books.jpg'

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={books}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-primary mt-16">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
