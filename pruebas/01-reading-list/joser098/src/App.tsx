import { useSelector } from "react-redux";
import "./App.css";
import Books from "./components/Books";
import Header from "./components/Header";
import ReadingList from "./components/ReadingList";
import { useSyncLocalStorage } from "./hooks/useSyncLocalStorage";
import { RootState } from "./redux/store";

function App() {
  useSyncLocalStorage()
  const tabState = useSelector((state: RootState) => state.book.tabState)
  
  return (
    <>
      <Header/>
      <section className="flex ">
        {
          tabState ? <Books /> : <ReadingList />
        }
      </section>
    </>
  );
}

export default App;
