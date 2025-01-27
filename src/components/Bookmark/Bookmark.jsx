import PropTypes from "prop-types";

const Bookmark = ({ title }) => {
  console.log(title, "tit");
  return (
    <div className="bg-white px-4 py-5 rounded-md">
      <p>{title}</p>
    </div>
  );
};

Bookmark.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Bookmark;
