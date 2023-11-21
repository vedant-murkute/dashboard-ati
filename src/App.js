import { RecoilRoot } from "recoil";
import "./App.css";
import { CompanyList } from "./components/CompantList";
import { Navbar } from "./components/Navbar";
import { Chart } from "./components/Chart";
import { Joystick } from "./components/Joystick";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="left-section">
          <CompanyList></CompanyList>
        </div>
        <div className="right-section">
          <Chart></Chart>
          <Joystick></Joystick>
        </div>
      </div>
    </>
  );
}

export default App;
