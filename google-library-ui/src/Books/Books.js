import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Book from "../Book/Book";

export default function Books({ books, user }) {
  console.log("books list...", books);
  console.log("blalalallallal", user);
  return (
    <div className="container">
      <div className="row w-100">
        {books.map((v) => {
          console.log("fjfjdhfjdf", v.volumeInfo);
          const imgLink = v.volumeInfo.imageLinks
            ? v.volumeInfo.imageLinks.smallThumbnail
            : "";
          return (
            <div className="col-4 p-5">
              <div className="card" style={{ width: "14rem" }}>
                <img
                  className="card-img-top"
                  src={imgLink}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title ">{v.volumeInfo.title}</h5>
                  {/* {v.volumeInfo.authors.length &&
                      v.volumeInfo.authors.map((a) => {
                        return <p className="card-text">{a}</p>;
                      })} */}
                  <Link
                    className="btn btn-success  "
                    to={{
                      pathname: "/bookInfo",
                      search: `?id=${v.id}`,
                    }}
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="col-4"></div> */}
      </div>
    </div>
  );
}
