import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';


export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;

const Home = () =>{
  const navigate = useNavigate();
  function navigateTo(url: string) {
    navigate(url);
  }
  return(
          <div>
            <p>Home</p>
            <p><button onClick={() => navigateTo("about")}>Programatically Navigate to About</button></p>
            <p><Link to="/contact">Contact</Link></p>
          </div>
  )
}

const About = () =>{
  const navigate = useNavigate();
  const navigateTo = (url: string) => {
    navigate(url)
  }
  return(
          <div>
            <p>About</p>
            <p><button onClick={() => navigateTo("/")}>Programatically Navigate to Home</button></p>
            <p><Link to="/contact">Contact</Link></p>
          </div>
  )
}

const Contact = () =>{
  const navigate = useNavigate();
  const navigateTo = (url: string) => {
    navigate(url)
  }
  return(
          <div>
            <p>Contact</p>
            <p><Link to="/">Home</Link></p>
            <p><button onClick={() => navigateTo("/about")}>Programatically Navigate to About</button></p>
          </div>
  )
}
