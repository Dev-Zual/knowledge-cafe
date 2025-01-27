import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  console.log(bookmarks, "in book");
  return (
    <div className="md:w-1/3">
      <div>
        <h3 className="text-3xl font-semibold p-4">Spent time on read: </h3>
      </div>

      <div className="bg-black/5 px-4 mt-2 rounded-md py-4">
        <h3 className="text-2xl font-semibold">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        <div className="mt-3">
          {bookmarks.map((title) => (
            <Bookmark key={title} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
