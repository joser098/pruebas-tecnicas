import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  changeGenreFilter,
  changePageFilter,
  changeTitleFilter,
  setTab,
} from "../redux/booksState";

const Filters = () => {
  const tabState = useSelector((state: RootState) => state.book.tabState);
  const genres = useSelector((state: RootState) => state.book.genres);
  const numPagesFiltered = useSelector(
    (state: RootState) => state.book.filters.pages
  );
  const dispatch = useDispatch();

  const handlePagesChange = (event: any) => {
    dispatch(changePageFilter(event.target.value));
  };

  const handleGenreChange = (event: any) => {
    dispatch(changeGenreFilter(event.target.value));
  };

  const handleTitleChange = (event: any) => {
    dispatch(changeTitleFilter(event.target.value));
    console.log(event.target.value);
  };

  return (
    <div className="flex items-center justify-around p-6 mobile:flex-col">
      <input
        onChange={handleTitleChange}
        className="h-8 rounded-sm focus:border-violet w-52 mobile:mb-3"
        type="text"
        placeholder="Buscar por titulo"
      />

      <div className="flex items-center mobile:mb-3">
        <label className="text-white mr-2">Minimo de: </label>
        <input onChange={handlePagesChange} type="range" min="0" max="1000" />
        <label className="text-white ml-2"> {numPagesFiltered} Paginas</label>
      </div>
      <select
        onChange={handleGenreChange}
        name="genres"
        className="h-8 rounded-sm cursor-pointer mobile:mb-3"
      >
        <option value="all">All</option>
        {genres.map((genre: string) => {
          return <option value={genre}>{genre}</option>;
        })}
      </select>
      <button
        className="text-black bg-white font-semibold px-2 py-1 rounded-sm hover:bg-violet hover:text-white transition-colors h-8 cursor-pointer"
        onClick={() => dispatch(setTab())}
      >
        {tabState ? "Lista de lectura" : "Libros"}
      </button>
    </div>
  );
};

export default Filters;
