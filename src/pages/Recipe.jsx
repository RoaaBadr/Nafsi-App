import { useParams, Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch.jsx';
import '../design/Recipe.css'
import Navbar from '../sections/Navbar.jsx';
 
export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:1000/recipes/${id}`;
  const { error, isLoading, data: recipe } = useFetch(url)

  return (
   <>
   <Navbar/>
    <div className="recipe-container">

      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading Articles...</p>}

      {recipe && (
        <div className='recipe'>
          <h2 className="recipe-title">{recipe.title}</h2>
          <h3 className="recipe-type">{recipe.type}</h3>
          <p className='recipe-author'> Recipe By {recipe.author}</p>
          <img className='img' src={recipe.img} alt={recipe.title} />

          <div className="ingredients">
              <h3 className='recipe-ingredients recipe-subtitle'>{recipe.header}</h3>
              <div>
                
                {recipe.content.map(ing => <p key={ing}>{ing}</p>)}
              </div>
          </div>

          <div className="instructions">
              <h3 className='recipe-instructions recipe-subtitle'>{recipe.header}</h3>
              <ul>
                {recipe.content.map(ing => <p key={ing}>{ing}</p>)}
              </ul>
          </div>


        </div>
      )}

        <Link className='link' to="/blogs" ><span class="text">Return to main page</span></Link>
    </div></>
  )
}