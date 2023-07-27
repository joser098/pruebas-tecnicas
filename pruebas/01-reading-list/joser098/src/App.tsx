import "./App.css";
import Books from "./components/Books";
import Header from "./components/Header";
import ReadingList from "./components/ReadingList";
import { useSyncLocalStorage } from "./hooks/useSyncLocalStorage";

function App() {
  useSyncLocalStorage();
  return (
    <>
      <Header />
      <section className="flex ">
        <Books />
        <ReadingList />
      </section>
    </>
  );
}

export default App;
