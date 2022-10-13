import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,HashRouter,Routes,Route, UseParams,} from 'react-router-dom'
import Header from './Header';
import Watchlist from './Watchlist';
import AnimeList from './AnimeList';
import Details from './Details';



function App() {
  return (
    <div>
  
   <HashRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<AnimeList/>}></Route>
        <Route exact path='/watchlist' element={<Watchlist/>}></Route>
        <Route exact path='/details' element={<Details/>}></Route>
      
       
     
      </Routes>
     </HashRouter>
        
    </div>
  );
}

export default App;
