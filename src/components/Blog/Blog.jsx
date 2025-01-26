import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { title, name, coverImage } = blog;
  return (
    <div>
      <img src={coverImage} alt="" />
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p>{name}</p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
