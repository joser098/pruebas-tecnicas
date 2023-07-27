import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { changeGenreFilter, changePageFilter } from "../redux/booksState";

const Filters = () => {
  const genres = useSelector((state: RootState) => state.book.genres);
  const numPagesFiltered = useSelector((state : RootState) => state.book.filters.pages);
  const dispatch = useDispatch();

  const handlePagesChange = (event: any) => {
    dispatch(changePageFilter(event.target.value))
  }

  const handleGenreChange = (event: any) => {
    dispatch(changeGenreFilter(event.target.value))
  }
 
  return (
    <div className="flex justify-evenly h-8 items-center">
      <div>
        <label htmlFor="">Minimo de: </label>
        <input onChange={handlePagesChange}
               type="range" 
               min="0"
               max='1000' />
        <label htmlFor=""> {numPagesFiltered} Paginas</label>
      </div>
      <select onChange={handleGenreChange} name="genres">
        <option value="all">All</option>
        {genres.map((genre: string) => {
          return <option value={genre}>{genre}</option>;
        })}
      </select>
    </div>
  );
};

export default Filters;
