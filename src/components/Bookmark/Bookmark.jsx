import PropTypes from "prop-types";

const Bookmark = ({ title }) => {
  console.log(title, "tit");
  return (
    <div className="">
      <p>{title}</p>
    </div>
  );
};

Bookmark.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Bookmark;
