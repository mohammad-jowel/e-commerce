import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './UserContext';

import Layout from './comps/Layout';
import Home from './comps/Home';
import Signup from "./comps/Signup";
import Login from "./comps/Login";
import Checkout from "./comps/Checkout";
import Nopage from "./comps/Nopage";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="singup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;