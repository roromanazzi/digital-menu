import "./App.css";
import Categories from "./components/Products/Categories";
import categories from "./placeholder/data";

function App() {
  return (
    <>
      <header>
        <img></img>
      </header>
      <main className="main">
        <Categories categories={categories} />
      </main>
    </>
  );
}

export default App;
