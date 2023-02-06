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
// import Tooltip from '@mui/material/Tooltip';
import { createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

import './Navbar.scss';

import react from 'src/assets/images/react-logo-black.png';
import scrollToTop from 'src/utils/scrollToTop';

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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [cutUrl, setUrl] = React.useState('\\');
  const [pages] = React.useState(props.buttons);

  React.useEffect(() => {
    setUrl(window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, '/'));
  }, []);

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
    if (index === 'registration') {
      props.onClick('registration');
    } else {
      let currentPages = pages.filter(
        (page) => page[5] === 'inPage' && page[4] === cutUrl
      );
      props.onClick(currentPages[index][3]);
    }
  };

  const handleChangeUrl = () => {
    let prevCutUrl = cutUrl;
    if (
      prevCutUrl !== window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, '/')
    ) {
      scrollToTop(0, 0);
    }
    setUrl(window.location.href.replace(/^(?:\/\/|[^\/]+)*\//, '/'));
  };

  const createElements = () => {
    let routePages = pages.filter((page) => page[5] === 'route');
    let currentPages = pages.filter(
      (page) => page[5] === 'inPage' && page[4] === cutUrl
    );

    return (
      <div>
        {routePages.map((page, index) => (
          <Link to={page[4]}>
            <Button
              key={page[1]}
              children={page[0]}
              iconName={page[1]}
              buttonType={page[2]}
            />
          </Link>
        ))}
        {currentPages.map((page, index) => (
          <Button
            key={page[1]}
            children={page[0]}
            iconName={page[1]}
            buttonType={page[2]}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    );
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

          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            onClick={handleChangeUrl}
          >
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
              {createElements()}
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
          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            onClick={handleChangeUrl}
          >
            {pages
              .filter((page) => page[5] === 'route')
              .map((page, index) => (
                <Link to={page[4]}>
                  <Button
                    key={page[1]}
                    children={page[0]}
                    iconName={page[1]}
                    buttonType={page[2]}
                    onclick={() => handleClick(index)}
                  />
                </Link>
              ))}
            {pages
              .filter((page) => page[5] === 'inPage' && page[4] === cutUrl)
              .map((page, index) => (
                <Button
                  key={page[1]}
                  children={page[0]}
                  iconName={page[1]}
                  buttonType={page[2]}
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
                onClick={() => handleClick('registration')}
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
                    begin on February 6th 2023. Please check back then!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} autofocus buttonType='brand'>
                    Okay
                  </Button>
                  <a
                    href='https://docs.google.com/forms/d/e/1FAIpQLSf2wK0jIpQhgDmzsAVgdB-ui3sc5YB0SGltbimuQ-HIgnSz1A/viewform?usp=sf_link'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button autofocus buttonType='brand'>
                      Remide Me!
                    </Button>
                  </a>
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
