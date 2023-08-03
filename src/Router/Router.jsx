import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";
import ProfilePrivate from "../pages/Profile/ProfilePrivate";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile/*" element={<ProfilePrivate />} />
        </Routes>
    );
}

export default Router;