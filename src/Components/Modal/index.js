import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import closeIcon from "../../Assets/CloseIcon.svg";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import hamburgerIcon from "../../Assets/threedots.svg";
import ConnectWalletIcon from "../../Assets/connectWalletIcon.svg";
import "../Header/index.css";
import settingIcon from "../../Assets/settingIcon.svg";
import Avatar from "../../Assets/Avatar.svg";

const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            padding: "1vw",
          }}
        >
          <img style={{ width: "30px", height: "30px" }} src={closeIcon} />
        </div>
        <div>
          <List>
            <ListItem disablePadding>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="header-sec2"
              >
                <button
                  style={{ width: "170px", height: "40px", fontSize: "15px" }}
                >
                  <span>
                    <img src={ConnectWalletIcon} />
                  </span>
                  Connect Wallet
                </button>
              </div>
            </ListItem>
            <ListItem>
              <img style={{ marginTop: "5px" }} src={settingIcon} />
              <img style={{ marginTop: "5px" }} src={Avatar} />
            </ListItem>
          </List>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button disableRipple onClick={toggleDrawer(anchor, true)}>
            <img src={hamburgerIcon} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default TemporaryDrawer;
