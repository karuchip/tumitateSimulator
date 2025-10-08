"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import WarningIcon from '@mui/icons-material/Warning';
import TollIcon from '@mui/icons-material/Toll';
import Link from 'next/link';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

      <List>
        <ListItem disablePadding>
          <Link href={"/coastFirePage"}>
            <ListItemButton>
              <ListItemIcon>
                <TollIcon />
              </ListItemIcon>
              コーストFIRE 積立金額シュミレーター
              <ListItemText/>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <Link href={"/mensekiPage"}>
            <ListItemButton>
              <ListItemIcon>
                <WarningIcon />
              </ListItemIcon>
              免責事項
              <ListItemText/>
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding>
          <Link href={"/feedbackForm"}>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              お問い合わせ
              <ListItemText/>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon sx={{fontSize:"28px", color:"#fff"}}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
