import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import StarBorder from "@mui/icons-material/StarBorder";
import PeopleIcon from '@mui/icons-material/People';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from "react-router-dom";

export default function IncomeReport() {
  const [open, setOpen] = React.useState(false);
const navigate = useNavigate()
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{paddingBlock:'0px'}}>
      <ListItemButton onClick={handleClick} sx={{height:'45px'}}>
        <ListItemIcon>
          <CurrencyRupeeIcon sx={{ color: "#D8AF72" }} />
        </ListItemIcon>

        <ListItemText primary="IncomeReport" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate('/TotalIncome')}>
            <PeopleIcon/>
            <ListItemIcon>

              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Total Income" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate('/ROIIncome')}>
            <PeopleIcon/>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText
              primary="
            ROI Income"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate('/LevelIncome')}>
            <PeopleIcon/>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText
              primary="
           Level Income"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate('/RewardIncome')}>
            <PeopleIcon/>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText
              primary="
            Reward Income"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}