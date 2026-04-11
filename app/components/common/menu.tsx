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
import HomeIcon from '@mui/icons-material/Home';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
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
          <Link href={"/"} className='w-full'>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              ホーム
              <ListItemText/>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <Link href={"/coast-fire-article"} className='w-full'>
            <ListItemButton>
              <ListItemIcon>
                <LightbulbIcon />
              </ListItemIcon>
              コーストFIREとは？
              <ListItemText/>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <Link href={"/coastFirePage"} className='w-full'>
            <ListItemButton>
              <ListItemIcon>
                <TollIcon />
              </ListItemIcon>
              コーストFIRE 積立金額シミュレーター
              <ListItemText/>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <Link href={"/coast-fire-age"} className='w-full'>
            <ListItemButton>
              <ListItemIcon>
                <DirectionsRunIcon />
              </ListItemIcon>
              コーストFIRE 達成年齢シミュレーター
              <ListItemText/>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>


      <List>
        <ListItem disablePadding>
          <Link href={"/risyokuSavingSimulatiorPage"} className='w-full'>
            <ListItemButton>
              <ListItemIcon>
                <HotelIcon />
              </ListItemIcon>
              離職期間の貯金推移シミュレーター
              <ListItemText/>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <Link href={"/mensekiPage"} className='w-full'>
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
          <Link href={"/privacypolicy"} className='w-full'>
            <ListItemButton>
              <ListItemIcon>
                <PrivacyTipIcon />
              </ListItemIcon>
              プライバシーポリシー
              <ListItemText/>
            </ListItemButton>
          </Link>
        </ListItem>

        <ListItem disablePadding>
          <Link href={"/feedbackForm"} className='w-full'>
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
