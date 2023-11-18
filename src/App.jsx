import "./App.css";
import Categories from "./components/Products/Categories";
import Header from "./components/UI/Header";
import categories from "./placeholder/data";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Categories categories={categories} />
      </main>
    </>
  );
}

export default App;
