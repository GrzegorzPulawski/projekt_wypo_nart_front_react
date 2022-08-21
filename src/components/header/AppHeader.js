import React from "react";
import classes from "./AppHeader.module.css";

const AppHeader = () => {
    return(
        <div className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>
            <p>Mała Wypożyczalnia Nart</p>
        </div>
            <div className={classes.HeaderRight}>
                 <div>Home</div>
                 <div>Formularz klienta</div>
                 <div>Wypożycz</div>
                <div>Wylistuj</div>
        </div>
    </div>
    );

}
export default AppHeader;