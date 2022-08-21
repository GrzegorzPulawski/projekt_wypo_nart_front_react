import React from "react";
import classes from "./AppBody.module.css";
import NartyList from "../equipmentlist/NartyList";

const AppBody = () => {
    return(
        <div className={classes.AppBody}>
            <NartyList/>

        </div>
    );
}
export default AppBody;