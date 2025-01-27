import Profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="container mx-auto border-b border-gray-200 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
        <img src={Profile} alt="" />
      </div>
    </header>
  );
};

export default Header;
