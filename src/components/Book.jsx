import React from "react";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    totalPages,
    yearOfPublishing,
  } = book;
  return (
    <div className="">
      <div className="card bg-base-100 border-2 px-4 py-2 shadow-sm">
        <figure className="px-10  bg-gray-100 py-6">
          <img src={image} alt={bookName} className="rounded-xl w-full  md:max-h-[300px] bg-gray-300" />
        </figure>
        
        <div className="card-body">
          <div className="flex justify-between ">
            <p className="font-semibold text-[#23be0a]">Pages:{totalPages}</p>
            <p className="font-semibold  text-[#23be0a]">Publishing Year: {yearOfPublishing}</p>
          </div>
          <h2 className="card-title line-clamp-1 text-2xl">{bookName}</h2>
          <p className="text-sm">By : {author}</p>
        </div>
        <div className="flex border-t-2 mx-6 border-dashed justify-between items-center">
          <p>{category}</p>
          <p className="flex gap-1 items-center">
            {rating} <FaRegStar></FaRegStar>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
