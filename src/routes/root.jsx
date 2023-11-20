import Category from "../components/Products/Categories";
import Header from "../components/UI/Header";
import Welcome from "../components/UI/Welcome";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route key={"welcome"} path={"/"} element={<Welcome />} />
          <Route
            key={"cafeteria"}
            path={"cafeteria-de-especialidad"}
            element={<Category categoryName="cafeteria-de-especialidad" />}
          />
          <Route
            key={"almuerzo"}
            path={"almuerzo-frente-al-mar"}
            element={<Category categoryName="almuerzo-frente-al-mar" />}
          />
          <Route
            key={"cena"}
            path={"cena-de-autor"}
            element={<Category categoryName="cena-de-autor" />}
          />
          <Route
            key={"bebidas"}
            path={"bebidas"}
            element={<Category categoryName="bebidas" />}
          />
          <Route
            key={"vinos"}
            path={"vinos"}
            element={<Category categoryName="vinos" />}
          />
          <Route
            key={"proximos-eventos"}
            path={"proximos-eventos"}
            element={<Category categoryName="proximos-eventos" />}
          />
        </Routes>
      </main>
    </>
  );
}

export default Root;
