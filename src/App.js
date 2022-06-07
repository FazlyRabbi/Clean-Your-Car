import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Home } from "./Component";
import { Services } from "./Component";
import { Blog } from "./Component";
import { AboutUs } from "./Component";
import { SignUp } from "./Component";
import { Login } from "./Component";
import { CheckOut } from "./Component";
import { NotFound } from "./Component";

function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/checkout"} element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />

        {/* <Banner />
        <Services />
        <Footer />
        <Blog />
        <AboutUs /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
