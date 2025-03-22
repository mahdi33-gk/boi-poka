import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookName, author, image, rating, category } = book;
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center border-b-2 border-dashed">
          <h2 className="card-title">{bookName}</h2>
          <p>
            by- {author}
          </p>
        </div>
        <div>
            <p>{category}</p>
            <p>{rating} <FaRegStar></FaRegStar></p>
        </div>
      </div>
    </div>
  );
};

export default Book;
