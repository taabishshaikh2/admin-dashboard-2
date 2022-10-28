import React from "react";
import { links } from "../data/links_data";
import { AccordionDetails, AccordionSummary ,Accordion} from "@mui/material";
import {Person  } from '@material-ui/icons'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ComputerIcon from '@mui/icons-material/Computer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { Link, NavLink } from "react-router-dom";


const SideBar = () => {
    
  return (
    <div className="sideBar shadow rounded">
      <div className="sidebar__upperpart py-2 shadow">
        <div className="sidebar__title">
          <h5 className="h5">Crown Security</h5>
        </div>
      {/* <br /> */}
        <div className="sidebar__img__div"><Person fontSize="large"/></div>
      </div>
      <div className="sidebar__lowerpart">
        <Card>
          <CardContent>
          <Link className="sidebar_link" to='/' >
                <ComputerIcon />
                <span>My Dashboard</span>
                </Link>
          </CardContent>
        </Card>
     
        {links.map((item) => {
            return(
               
            <Accordion  >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                
            > 
                
                {item.icon}
                {item.title}
                
            </AccordionSummary>
            <AccordionDetails>
            {item.links.map((link) => {
                    return(
                        <Link className='sidebar_link' to={`/${link.name}`}>
                        {link.name}
                      </Link>
                    )
                })}
            </AccordionDetails>
        </Accordion>
           
            
        )})}
      </div>
    </div>
  );
};

export default SideBar;
