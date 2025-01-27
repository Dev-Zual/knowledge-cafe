import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddBookMark }) => {
  const {
    title,
    name,
    coverImage,
    authorImg,
    postedDate,
    readingTime,
    hashtag,
  } = blog;
  return (
    <div className="space-y-7">
      <img className="w-full" src={coverImage} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <div className="w-18 rounded-full h-18">
            <img
              className="w-full rounded-full h-full"
              src={authorImg}
              alt=""
            />
          </div>
          <div>
            <h4 className="text-3xl font-semibold">{name}</h4>
            <p className="text-black/60">{postedDate}</p>
          </div>
        </div>

        <div className="space-x-2 flex items-center font-semibold text-black/60">
          <span>{readingTime} min read</span>
          <button
            onClick={() => handleAddBookMark(title)}
            className="text-2xl cursor-pointer"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-semibold">{title}</h1>
      <div className="space-x-2">
        {hashtag.map((tag) => (
          <span className="text-black/60" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <a className="underline text-blue-500" href="#">
        Mark as read
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookMark: PropTypes.func.isRequired,
};

export default Blog;
