import classes from "./NartyList.module.css";
import React from "react";


const NartyList = () => {
    return(
        <div className={classes.NartyListHeader}>

                <div className="one">Id</div>
                <div className="two">Długość nart</div>
                <div className="three">Nazwa</div>
                <div className="four">NARTY/SNOWBOARD</div>
                <div className="five"></div>
        </div>

    );
}
export default NartyList;