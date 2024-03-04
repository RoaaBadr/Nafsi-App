import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./design/signup.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NoPage from "./pages/NoPage.jsx";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";
import Recipe from "./pages/Recipe.jsx";
import FetchA from "./pages/ArticleFetch.jsx";
import FetchV from "./pages/VideoFetch.jsx";
import { Signup } from "./components/Signup.jsx";
import { Login } from "./components/Login.jsx";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/blogs" element={<FetchA />} />
          <Route path="/video" element={<FetchV />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// <Route path="/recipes/:id" element={<Recipe />} />
// <Route path="/videos/:id" element={<Video />} />
// <Route path="/sign-up" element={<SignUp />} />
// <Route path="/log-in" element={<LogIn />} />
// <Route path="/blogs" element={<Fetch />} />
// <Route path="/video" element={<FetchV />} />
/* <HashRouter>
       // <Routes>
         // <Route path="/" element={<Home />} />
        //  <Route path="*" element={<NoPage />} />

//<Route path="/video" element={<FetchV />} />
         // <Route path="/blogs" element={<FetchA />} />

         // <Route path="/recipes/:id" element={<Recipe />} />
         // <Route path="/videos/:id" element={<Video />} />


       /// </Routes>    </HashRouter>*/
