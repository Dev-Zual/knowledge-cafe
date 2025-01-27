import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, reading }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-[#6047EC]/10 rounded-md text-center p-4 border border-[#6047EC] text-[#6047EC]">
        <h3 className="text-3xl font-semibold ">
          Spent time on read: {reading} min
        </h3>
      </div>

      <div className="bg-black/5 px-4 mt-2 rounded-md py-4">
        <h3 className="text-2xl font-semibold">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        <div className="mt-3 space-y-3">
          {bookmarks.map((blog) => (
            <Bookmark key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  reading: PropTypes.number.isRequired,
};

export default Bookmarks;
