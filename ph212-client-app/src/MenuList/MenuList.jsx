import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="Documentation" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary="Source Code" />
    </ListItem>
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