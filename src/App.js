import { Route, Routes} from 'react-router-dom';
import Home from './views/Home/Home';
import PageNotFound from './views/PageNotFound/PageNotFound';
// import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
