import Filters from "./Filters";

const Header = () => {
  return (
    <header className="bg-black">
      <h1 className="text-3xl text-white font-bold p-3">BOOKS WOLRD</h1>
      <Filters />
    </header>
  );
};

export default Header;
