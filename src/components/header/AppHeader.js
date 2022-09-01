import React from "react";
import classes from "./AppHeader.module.css";
import {Link} from "react-router-dom";

const AppHeader = () => {
    return(
        <div className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>
            <p>Mała Wypożyczalnia Nart</p>
        </div>
            <div className={classes.HeaderRight}>
                <Link to={"/"}>
                    <div>Home</div>
                </Link>
                 <div>Formularz klienta</div>
                 <div>Wypożycz</div>
                <Link to={"/list"}>
                    <div>NartyListuj</div>
                </Link>
                <div>ButyListuj</div>
        </div>
    </div>
    );

}
export default AppHeader;