import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Bookdetail = () => {
  const { bookId } = useParams();
  const intId = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === intId);

  return (
    <div className="flex gap-3">
      <div className="bg-gray-100 px-6 py-2">
        <img className="max-w-full h-full" src={book.image} alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">Name: {book.bookName} </h1>
        <p>By: {book.author}</p>
        <div className="divider"></div>
        <p>{book.category}</p>
        <div className="divider"></div>
        <p>
          <span className="font-semibold">Review:</span> {book.review}
        </p>
        <p className="font-semibold">
          Tags:<span className="text-[#23be0a] font-normal"> {book.tags}</span>
        </p>
        <div className="divider"></div>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <p className="flex justify-between">
              Number of pages:
              <span className="font-semibold">{book.totalPages}</span>{" "}
            </p>
            <p className="flex justify-between">
              Publisher:<span className="font-semibold">{book.publisher}</span>{" "}
            </p>
            <p className="flex justify-between">
              Year of publishing:
              <span className="font-semibold">{book.yearOfPublishing}</span>{" "}
            </p>
            <p className="flex justify-between">
              Ratings:<span className="font-semibold">{book.rating}</span>{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-3">
          <button class="btn btn-outline">Read</button>
          <button class="btn btn-accent text-white">WishList</button>
        </div>
      </div>
    </div>
  );
};

export default Bookdetail;
