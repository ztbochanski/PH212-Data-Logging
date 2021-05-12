import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CodeIcon from '@material-ui/icons/Code';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import MemoryIcon from '@material-ui/icons/Memory';
import ComputerIcon from '@material-ui/icons/Computer';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
  <div>
    <ListItemLink href="https://ztbochanski.github.io/PH212-Data-Logging/" target="_blank">
      <ListItemIcon>
        <LocalCafeIcon />
      </ListItemIcon>
      <ListItemText primary="Jupyter Notebook" />
    </ListItemLink>
    <ListItemLink href="https://github.com/ztbochanski/esp32-data-logger" target="_blank">
      <ListItemIcon>
        <MemoryIcon />
      </ListItemIcon>
      <ListItemText primary="ESP32 Logger" />
    </ListItemLink>
    <ListItemLink href="https://github.com/ztbochanski/PH212-Data-Logging" target="_blank">
      <ListItemIcon>
        <ComputerIcon />
      </ListItemIcon>
      <ListItemText primary="UI Code" />
    </ListItemLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Download</ListSubheader>
    <ListItemLink href="https://raw.githubusercontent.com/ztbochanski/esp32-data-logger/main/src/main.cpp" target="_blank">
      <ListItemIcon>
        <CodeIcon />
      </ListItemIcon>
      <ListItemText primary="main.cpp" />
    </ListItemLink>
    <ListItemLink href="https://raw.githubusercontent.com/ztbochanski/PH212-Data-Logging/main/ph212-client-app/src/Dashboard/Dashboard.jsx" target="_blank">
      <ListItemIcon>
        <CodeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard.jsx" />
    </ListItemLink>
  </div>
);