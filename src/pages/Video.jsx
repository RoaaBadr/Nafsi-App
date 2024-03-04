import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.jsx";
import "../design/Videos.css";
import Navbar from "../sections/Navbar.jsx";

export default function Videos() {
  const { id } = useParams();
  const url = `http://localhost:1000/videos/${id}`;
  const { error, isLoading, data: recipe } = useFetch(url);

  return (
    <>
      <Navbar />
      <div className="recipe-container">
        {error && <p className="error">{error}</p>}
        {isLoading && <p className="loading">Loading Videos...</p>}

        {recipe && (
          <div className="recipe">
            <h2 className="recipe-title">{recipe.title}</h2>
            <h3 className="recipe-type">{recipe.type}</h3>

            <iframe
              src={recipe.video}
            ></iframe>

            <div className="ingredients">
              <h3 className="recipe-ingredients recipe-subtitle">
                {recipe.header}
              </h3>
              <div>
                {recipe.content.map((ing) => (
                  <p key={ing}>{ing}</p>
                ))}
              </div>
            </div>

            <div className="instructions">
              <h3 className="recipe-instructions recipe-subtitle">
                {recipe.header}
              </h3>

              {recipe.content.map((ing) => (
                <p key={ing}>{ing}</p>
              ))}
            </div>
          </div>
        )}

        <Link className="link" to="/video">
          <span class="text">Return to main page</span>
        </Link>
      </div>
    </>
  );
}
