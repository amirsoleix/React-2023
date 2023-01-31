//   render() {
//     let list = this.props.buttons;
//     let buttons = list.map((row) => {
//       return this.renderButton(row);
//     });

//     return (
//       <div className='navbar'>
//         <div className='navbar__container'>
//           <div className='navbar__right-section'>{buttons}</div>
//           <div className='navbar__left-section'>
//             <img src={logo} className='navbar-logo' alt={'Resana Logo'} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '../Button';
import Tooltip from '@mui/material/Tooltip';
import { createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './Navbar.scss';

import react from 'src/assets/images/react-logo-black.png';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

function ResponsiveAppBar(props) {
  const pages = props.buttons;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (index) => {
    props.onClick(pages[index][1]);
  };

  return (
    <AppBar className='navbar' theme={theme}>
      <Container maxWidth='xl' className='navbar__container'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={react} className='logo' alt='react-logo' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={page[1]}
                  children={page[0]}
                  iconName={page[1]}
                  buttonType={page[2]}
                  onClick={() => handleClick(index)}
                />
              ))}
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={react} className='logo' alt='react-logo' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page[1]}
                children={page[0]}
                iconName={page[1]}
                buttonType={page[2]}
                className='navbar__button'
                onClick={() => handleClick(index)}
              />
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <div>
              <Button
                key={'check-circle'}
                children={'Registration'}
                iconName={'check-circle'}
                buttonType={'brand'}
                className='navbar__button'
                onClick={handleClickOpen}
              />
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
              >
                <DialogTitle id='alert-dialog-title'>
                  {'Registration will be available soon!'}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id='alert-dialog-description'>
                    ReACT 2023 has not yet opened registration. The process will
                    begin on 9th February 2023. Please check back then!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autofocus buttonType='brand'>
                    Okay
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
