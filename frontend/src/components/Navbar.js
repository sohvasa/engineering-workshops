import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <ListItemText primary="Sign Up" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            Palo Alto Engineering Workshops
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            Palo Alto Engineering
            <br />
            Workshops
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="secondary" variant="contained" component={Link} to="/signup">Sign Up</Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
