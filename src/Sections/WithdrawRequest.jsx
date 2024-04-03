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
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from "react-router-dom";


export default function WithdrawRequest() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItemButton onClick={handleClick} sx={{ height: '43px' }}>
        <ListItemIcon>
          <AccountBalanceIcon sx={{ color: "#D8AF72" }} />
        </ListItemIcon>

        <ListItemText primary="Withdraw " />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('/SendRequest')}>
            <PeopleIcon />

            <ListItemIcon>

              <StarBorder />
            </ListItemIcon>

            <ListItemText primary="Send Request" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} onClick={() => navigate('./WalletHistory')}>
            <PeopleIcon />

            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>

            <ListItemText
              primary="
            Wallet History"
            />
          </ListItemButton>


        </List>
      </Collapse>
    </List>
  );
}