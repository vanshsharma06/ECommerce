import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function CategoryPanel({ IsOpenCatPanel, setIsOpenCatPanel }) {
  const toggleDrawer = (newOpen) => () => {
    setIsOpenCatPanel(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: { xs: 120, sm: 250, md: 200 }, // Mobile pe aur chhota
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <h3 className="p-2 text-[10px] sm:text-[12px] md:text-[14px] flex justify-center">
        Shop By Categories
      </h3>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: { xs: 25, sm: 40 } }}>
                {index === 0 ? (
                  <InboxIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
                ) : index === 1 ? (
                  <MailIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
                ) : index === 2 ? (
                  <InboxIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
                ) : (
                  <MailIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: { xs: "8px", sm: "12px", md: "14px" }, // Text size change
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: { xs: 25, sm: 40 } }}>
                {index === 0 ? (
                  <InboxIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
                ) : index === 1 ? (
                  <MailIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
                ) : (
                  <InboxIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: { xs: "7px", sm: "12px", md: "14px" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer open={IsOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
