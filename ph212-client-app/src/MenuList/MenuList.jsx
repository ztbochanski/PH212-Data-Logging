import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
  <div>
    <ListItemLink href="https://github.com/ztbochanski/PH212-Data-Logging/blob/main/PH212_Data_Logging.ipynb" target="_blank">
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="Notebook" />
    </ListItemLink>
    <ListItemLink href="https://github.com/ztbochanski/PH212-Data-Logging" target="_blank">
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary="Source Code" />
    </ListItemLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Download</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ArrowDownwardIcon />
      </ListItemIcon>
      <ListItemText primary="CSV" />
    </ListItem>
  </div>
);