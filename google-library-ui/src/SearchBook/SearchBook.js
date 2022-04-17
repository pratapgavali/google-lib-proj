import React, { useEffect, useState } from "react";
import BookInfo from "../BookInfo/BookInfo";
import axios from "axios";
export default function SearchBook() {
  const [bookData, setBookData] = useState({});
  const [showBookData, setShowBookData] = useState(false);
  function searchBook() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    console.log("====================================");
    console.log(id);
    console.log("====================================");

    const res = axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        setBookData(res.data);
        console.log(res.data);
        setShowBookData(true);
      });
  }

  useEffect(() => {
    searchBook();
  }, []);
  return showBookData ? <BookInfo bookData={bookData} /> : "";
}
