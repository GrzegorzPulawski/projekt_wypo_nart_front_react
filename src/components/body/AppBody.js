import React from "react";
import classes from "./AppBody.module.css";
import NartyList from "../equipmentlist/NartyList";
import { Route, Routes} from "react-router-dom";
import Home from "../home/Home";


const AppBody = () => {

        return(
            <div className={classes.AppBody}>
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/list"} element={<NartyList/>}> </Route>
                </Routes>
                </div>

        );

}

export default AppBody;