import "./App.css";
import Categories from "./components/Products/Categories";
import Header from "./components/UI/Header";
import categories from "./placeholder/data";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            {categories.map((category) => (
              <Route
                key={category.title}
                path={`/${category.path}`}
                element={<Categories categories={categories} />}
              />
            ))}
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
