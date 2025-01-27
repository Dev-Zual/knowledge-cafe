import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [reading, setReading] = useState(0);

  const handleAddBookMark = (blog) => {
    if (!bookmarks.includes(blog)) {
      setBookmarks([...bookmarks, blog]);
    } else {
      alert("already exist");
    }
  };

  const handleReadingTime = (time) => {
    setReading(reading + time);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex container mx-auto mt-4 gap-4 mb-5">
        <Blogs
          handleAddBookMark={handleAddBookMark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} reading={reading}></Bookmarks>
      </div>
    </>
  );
}

export default App;
