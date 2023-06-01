import GlobalStyle from "./styles/global";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import InfoPage from "./pages/InfoPage";

function Dashboard() {
  return (
    <div>
      <GlobalStyle />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/:data" element={<InfoPage />}></Route>
        {/* <Route
          exact
          path="/primaryform"
          element={<PrimaryPacientForm />}
        ></Route>
        <Route exact path="/secondaryform" element={<SecondaryForm />}></Route> */}
      </Routes>
    </div>
  );
}

export default Dashboard;
