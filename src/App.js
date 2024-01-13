import Home from "./Pages/HomePage/Home";
import Login from "./Pages/LoginPage/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
