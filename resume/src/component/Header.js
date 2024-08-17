import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MyImage from '../assets/1.png';

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Avatar" src={MyImage}  sx={{ width: 56, height: 50 }} />
            <Typography variant="h6" gutterBottom>
              KESAVAN BALASUBRAMANI
            </Typography>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
