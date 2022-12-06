

import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

function App() {
  return (
    <div >
     <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="movie/:id" element={<SingleMovie/>}/>
     <Route path="*" element={<Error/>}/>
     <Route path="/" element={<Home/>}/>    
      </Routes>
      </Router>    </div>
  );
}

export default App;
