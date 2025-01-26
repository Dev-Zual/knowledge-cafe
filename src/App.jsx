import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex container mx-auto mt-4 gap-4 mb-5">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
