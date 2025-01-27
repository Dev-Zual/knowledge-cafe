import { useState, useEffect } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleAddBookMark = (title) => {
    setBookmarks([...bookmarks, title]);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex container mx-auto mt-4 gap-4 mb-5">
        <Blogs blogs={blogs} handleAddBookMark={handleAddBookMark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
