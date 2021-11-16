import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Box py={2}>
          <Typography variant="h6" color="inherit" component="div">
            React Redux Contact Book
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}