import './VideosList.css' 
import { Link } from 'react-router-dom'

function VideosList({ recipes }) {

  if (!recipes) {
    return <p>No videos available.</p>;
  }

  return (
    
    <div className='recipe-list'> 
      {recipes.map(recipe => (
        <div key={recipe.id} className='card'>
          <img src={recipe.img} alt={recipe.title} className="card-img" />
            <h3 className='recipelist-title'>{recipe.title}</h3>
            <h4 className='recipelist-subtitle'>{recipe.type}</h4>
            <p className='recipe-cooking-time'>{recipe.description}</p>
            <Link className='btn' to={`/videos/${recipe.id}`}  ><span class="text">Read more</span></Link>
        </div> 
      ))}
    </div>
  )
}

export default VideosList