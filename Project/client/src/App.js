import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import Pans from "./components/Pans";
import Chat from "./components/Chat";
import { useState } from "react";

function App() {
  const [changeLanding, setChangeLanding] = useState(true)
  // const navigate = useNavigate();

  const sendTo = (e) => {
    e.preventDefault();
    if (changeLanding) {
      setChangeLanding(false)

    }

  }

  return (
    <BrowserRouter>
      <div className="App">
        {changeLanding ?
          <div className='landing'>
            <h1 className='m-2'><span className='onlyHeader'>Only</span><span className='pansHeader'>Pans</span></h1>
            <p className='homeP'>The only website for your Hot cast iron pan needs</p>
            <button className='btn btnLanding' onClick={sendTo}>Get Dirty</button>
          </div> :
          <div>
            <Layout>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/pans" element={<Pans />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </Layout>
          </div>



        }

      </div>
    </BrowserRouter>
  );
}

export default App;
