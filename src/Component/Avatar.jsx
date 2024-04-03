import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import PersonIcon from '@mui/icons-material/Person';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

export default function AvatarIcon() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate()

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <div>
                <abbr title="account setting">

                <PersonIcon
                    sx={{ justifyContent: 'center', marginTop: '6px', cursor: 'pointer' }}
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color=""
                // color="gold"
                >
                    <AccountCircle />
                </PersonIcon>
                </abbr>
               
                <Menu
                    sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginTop: '45px' }}

                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}><PermIdentityIcon sx={{ color: 'D8AF72' }} />  My Profile</MenuItem>
                    <MenuItem onClick={()=>navigate('/Login')}><LogoutIcon /> Logout</MenuItem>
                </Menu>
            </div>
        </Box>
    );
}