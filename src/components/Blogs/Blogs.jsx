import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookMark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 space-y-5 ">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddBookMark={handleAddBookMark}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddBookMark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blogs;
