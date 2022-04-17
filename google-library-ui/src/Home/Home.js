import React, { useState, useEffect } from "react";
import Books from "../Books/Books";
import axios from "axios";
import { logApi } from "../api";
import GoogleLogin from "react-google-login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  const [bookList, setBookList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("all");
  const [user, setUser] = useState({
    name: "",
    profileImg: "",
    email: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const responseGoogle = (response) => {
    console.log(response);
    const { email, name, imageUrl } = response.profileObj;
    const profile = { name: name, email: email, profileImg: imageUrl };
    localStorage.setItem("profile", JSON.stringify(profile));
    setUser({ name: name, email: email, profileImg: imageUrl });
    setIsLogin(true);
    console.log("resdsdsd", user);
  };

  async function getAllBooks(searchQuery) {
    const body = {
      user: user,
      query: searchQuery,
    };

    await axios.post(logApi + "api/logs", body);

    await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}:keyes&key=AIzaSyAv7yLyZhYhtyOyE8kMwB753DovNBCgqRg`
      )
      .then((response) => {
        console.log("====================================");
        console.log(response.data.items);
        console.log("====================================");
        setBookList(response.data.items);
      });
    console.log("repsodsds", bookList);
  }

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleLogin() {
    if (localStorage.getItem("profile")) {
      const userObj = localStorage.getItem("profile");
      setIsLogin(true);
      setUser(JSON.parse(userObj));
    }
  }

  function handleSearch() {
    getAllBooks(searchQuery);
  }

  function handleLogOut() {
    localStorage.removeItem("profile");
    setIsLogin(false);
    setUser({});
  }

  useEffect(() => {
    getAllBooks();
    handleLogin();
  }, [isLogin]);

  return (
    <div className="">
      <>
        <button className="btn btn-danger" onClick={handleLogOut}>
          {" "}
          Sign out
        </button>
        <Link className="btn btn-info" to="/userLog">
          User Logs
        </Link>
        <div class="input-group bg-white p-4 mt-3">
          <input
            type="search"
            className="form-control rounded p3 mt-3"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="btn btn-outline-primary p3 mt-3"
          >
            search
          </button>
        </div>
        <Books books={bookList} user={user} />
      </>
    </div>
  );
}
