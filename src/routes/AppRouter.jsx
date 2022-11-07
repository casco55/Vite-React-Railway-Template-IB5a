import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { FoodPlaces } from "../views/FoodPlaces";
import { Home } from "../views/Home";
import { Orders } from "../views/Orders";
import { Products } from "../views/Products";
import { Users } from "../views/Users";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const isLoggedIn = true;
    return (
        <>
            <div className="row g-0">
                <Router>
                    {isLoggedIn && <NavBar />}
                    <div className={isLoggedIn ? 'col-10' : 'col-12'}>
                        <Routes>
                            <Route path="/login" element={<PublicRoute isLoggedIn={isLoggedIn} />} />
                            <Route path='/' element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
                                <Route path='/' element={<Home />} />
                                <Route path='/users' element={<Users />} />
                                <Route path='/foodplaces' element={<FoodPlaces />} />
                                <Route path='/orders' element={<Orders />} />
                                <Route path='/foodplaces/:id_restaurante/products' element={<Products />} />
                            </Route>
                        </Routes>
                    </div>
                </Router>
            </div>
        </>
    )
}