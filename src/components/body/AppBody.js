import React from "react";
import classes from "./AppBody.module.css";
import { Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import NartyList from "../equipmentlist/NartyList";
import Form from "../form/Form";
import ButyList from "../equipmentlist/ButyList";


const AppBody = () => {

        return(
            <div className={classes.AppBody}>
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/form"} element={<Form/>}></Route>

                    <Route path={"/list"} element={<NartyList/>}> </Route>
                    <Route path={"/butyList"} element={<ButyList/>}></Route>
                </Routes>
                </div>

        );

}

export default AppBody;