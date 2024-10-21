import "./App.css";
import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form"

const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/form" element={<Form/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
