import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Book from "./Book/Book";
import SearchBook from "./SearchBook/SearchBook";
import UserSearchLogs from "./UserLogs/UserSearchLogs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookInfo" exact element={<SearchBook />} />
        <Route path="/userLog" exact element={<UserSearchLogs />} />
      </Routes>
    </Router>
  );
}

export default App;
