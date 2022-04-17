import React, { useEffect, useState } from "react";
import axios from "axios";
import BookInfo from "../BookInfo/BookInfo";
export default function Book({ boodId }) {
  const [bookData, setBookData] = useState({});

  //   function searchBook() {
  //     const queryParams = new URLSearchParams(window.location.search);
  //     const id = queryParams.get("id");
  //     console.log(id);
  //     const res = axios
  //       .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
  //       .then((res) => {
  //         setBookData(res.data);
  //         console.log(res.data);
  //       });
  //   }

  function searchBook() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    console.log("====================================");
    console.log(id);
    console.log("====================================");
  }

  useEffect(() => {
    searchBook();
  }, []);

  return <BookInfo bookData={bookData} />;
}
