// import { useState } from "react";
// import "./App.css";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/UI/Header";
// import categories from "/placeholder/data";
// import Categories from "./components/Products/Categories.jsx";

// function App() {
//   const [currentCategory, setCurrentCategory] = useState(null);

//   return (
//     <>
//       <Router>
//         <Header setCurrentCategory={setCurrentCategory} />
//         <main className="main">
//           <Routes>
//             {categories.map((category) => (
//               <Route
//                 key={category.title}
//                 path={`/${category.path}`}
//                 element={<Categories categories={categories} />}
//               />
//             ))}
//           </Routes>
//         </main>
//       </Router>
//     </>
//   );
// }

// export default App;
