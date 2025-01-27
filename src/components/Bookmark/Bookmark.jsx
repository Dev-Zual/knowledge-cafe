import PropTypes from "prop-types";

const Bookmark = ({ blog }) => {
  const { title } = blog;
  return (
    <div className="bg-white px-4 py-5 rounded-md">
      <p>{title}</p>
    </div>
  );
};

Bookmark.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Bookmark;
