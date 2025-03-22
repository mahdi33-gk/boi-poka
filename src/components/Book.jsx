import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookName, author, image, rating, category } = book;
  return (
    <div className="">
      <div className="card bg-base-100 border-2 px-4 py-2 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl md:max-h-36"
          />
        </figure>
        <div className="card-body  border-b-2 border-dashed">
          <h2 className="card-title text-2xl">{bookName}</h2>
          <p className="text-sm">
            By : {author}
          </p>
        </div>
        <div className="flex justify-between items-center">
            <p>{category}</p>
            <p className="flex gap-1 items-center">{rating} <FaRegStar></FaRegStar></p>
        </div>
      </div>
    </div>
  );
};

export default Book;
