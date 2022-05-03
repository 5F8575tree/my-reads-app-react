import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ Books, changeShelf }) => {

  return (
    <li>
        <div className="book" key={Books.id}>
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                     width: 128,
                     height: 193,
                     backgroundImage:
                     `url(${Books.url})`
                  }}
                  ></div>
                  <BookshelfChanger Books={Books} changeShelf={changeShelf}/>
            </div>
            <div className="book-title">{Books.title}</div>
            <div className="book-authors">{Books.authors}</div>
        </div>
    </li>
  )
}

export default Book;