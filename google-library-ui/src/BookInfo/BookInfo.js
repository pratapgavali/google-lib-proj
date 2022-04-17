import React from "react";

export default function BookInfo({ bookData }) {
  console.log("bbfokvofofv", bookData);
  const imgLink =
    bookData && bookData.volumeInfo.imageLinks
      ? bookData.volumeInfo.imageLinks.thumbnail
      : "";
  return (
    <div className="container w-100">
      <div className="col-4 p-5">
        <div className="" style={{ width: "14rem" }}>
          <img className="" src={imgLink} alt="Card image cap" />
          <div class="jumbotron">
            <h1 class="display-4">{bookData.volumeInfo.title}</h1>
            <p class="lead">{bookData.volumeInfo.description}</p>
            <hr class="my-4" />
            <p>
              <label> Authors: </label>
              {bookData.volumeInfo.authors.map((a) => {
                return <p>{a},</p>;
              })}
              <label>Laguage: </label>
              <p>{bookData.volumeInfo.language}</p>
              <label>Print Type: </label>
              <p>{bookData.volumeInfo.printType}</p>
              <label>No of Pages: </label>
              <p>{bookData.volumeInfo.printedPageCount}</p>
              <label>Published Date: </label>
              <p>{bookData.volumeInfo.publishedDate}</p>
              <label>Publisher: </label>
              <p>{bookData.volumeInfo.publisher}</p>
            </p>
            {/* <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p> */}
          </div>
          {/* <div className="">
            <h5 className="">{bookData.volumeInfo.title}</h5>
            <p className="">{bookData.volumeInfo.description}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
