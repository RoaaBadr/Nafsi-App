import RecipeList from '../Lists/RecipeList.jsx'
import useFetch from '../hooks/useFetch.jsx';
// import '../design/App.css'
import Navbar from '../sections/Navbar.jsx';
 
function Home() {

  const { data, isLoading, error } = useFetch('http://localhost:1000/recipes')
  
    return (
    <><Navbar/>
      <div className='home-container-1'>
        
        <div className='banner'>
        <h1 className="home-title-1">Articles List</h1>  </div>
         {error && <p className='error'>{error}</p>}
         {isLoading && <p className='loading'>Loading Articles...</p>}
        <RecipeList recipes={data}/>
      </div></>
    )
  }
  
  export default Home