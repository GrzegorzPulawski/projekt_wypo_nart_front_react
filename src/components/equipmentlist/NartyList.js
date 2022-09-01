import classes from "./NartyList.module.css";
import React from "react";
import {Grid} from "@mui/material";


const NartyList = () => {
    return(
        <div className={classes.Narty}>
            <div  className={classes.NartyTableHeader}>
                <div className="one">Id</div>
                <div className="two">Długość nart</div>
                <div className="three">Nazwa</div>
                <div className="four">NARTY/SNOWBOARD</div>
                <div className="five"></div>
            </div>
             <Grid container className={classes.NartyTableRow}>
                 <Grid item xs={2}>1</Grid>
                 <Grid item xs={2}>145</Grid>
                 <Grid item xs={2}>Atomic1</Grid>
                 <Grid item xs={2}>NARTY</Grid>
                 <Grid item xs={2}></Grid>
             </Grid>
        </div>

    );
}
export default NartyList;