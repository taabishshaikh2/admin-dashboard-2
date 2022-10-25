import React from "react";
import { links } from "../data/links_data";
import { AccordionDetails, AccordionSummary ,Accordion} from "@mui/material";
import {Person  } from '@material-ui/icons'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                        <li>{link.name}</li>
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
