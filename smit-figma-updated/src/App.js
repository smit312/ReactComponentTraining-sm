import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Test from "./components/Smit/ProductAcc";
import AuthLogin from "./components/Smit/AuthLogin";
import AuthRegister from "./components/Smit/AuthRegister";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthRegister />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/product" element={<Test />} />

        </Routes>
      </Router>
    </>
  );
}
