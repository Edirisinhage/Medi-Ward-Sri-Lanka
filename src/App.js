import AddWardDetails from "./Pages/AddWardDetails/AddWardDetails";
import Home from "./Pages/HomePage/Home";
import LeaveApprove from "./Pages/LeaveApprove/LeaveApprove";
import Login from "./Pages/LoginPage/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Sheduling from "./Pages/Scheduling/Sheduling";
import ViewSchedule from "./Pages/ViewSchedule/ViewSchedule";
import RequestLeave from "./Pages/RequestLeave/RequestLeave";
import News from "./Pages/News/News";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
            {/*<Route path="/" element={<Login/>}></Route>*/}
            <Route path="/" element={<Home/>}></Route>
            <Route path="/add-ward-details" element={<AddWardDetails/>}></Route>
            <Route path="/leave-approve" element={<LeaveApprove/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/scheduling" element={<Sheduling/>}></Route>
            <Route path="/view-schedule" element={<ViewSchedule/>}></Route>
            <Route path="/request-leave" element={<RequestLeave/>}></Route>
            <Route path="/news" element={<News/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
