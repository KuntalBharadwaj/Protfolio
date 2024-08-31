import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/playlist' element={<Projects/>} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/skill' element={<Skills/>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;