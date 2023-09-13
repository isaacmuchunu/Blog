import ArticleDetailsPage from "./pages/articleDetails/ArticleDetailsPage";
import HomePage from "./pages/home/HomePage";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="App body-font font-poppins">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailsPage />} />
      </Routes>
    </main>
  );
};
export default App;
