import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ blogs, handleAddBookMark }) => {
  return (
    <div className="md:w-2/3 space-y-5">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddBookMark={handleAddBookMark}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  handleAddBookMark: PropTypes.func.isRequired,
};

export default Blogs;
