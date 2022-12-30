import * as React from 'react';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaEnvelope, FaTiktok } from 'react-icons/fa';

const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
      <div className="w-full flex justify-end md:hidden w-1/2 ">
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <GiHamburgerMenu className="text-xl text-white"/>
        </Button>
        <Popper
          className="z-50"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    className='bg-[#656565] w-screen h-screen'
                  >
                    <Link to="/"> 
                      <MenuItem  onClick={handleClose}>
                          
                              <ThemeProvider theme={theme}>
                                  <Button><h1  className="text-4xl text-white">HOME</h1></Button>
                              </ThemeProvider>
                          
                      </MenuItem>
                    </Link>
                    <Link to="/blog"> 
                      <MenuItem onClick={handleClose}>
                          <ThemeProvider theme={theme}>
                            <Button><h1  className="text-4xl text-white">BLOG</h1></Button>
                          </ThemeProvider>
                      </MenuItem>
                    </Link>
                    <Link  to="/about"> 
                      <MenuItem onClick={handleClose}>
                          <ThemeProvider theme={theme}>
                            <Button><h1  className="text-4xl text-white">ABOUT</h1></Button>
                          </ThemeProvider>
                      </MenuItem>
                    </Link>
                    <Link  to="/services">
                      <MenuItem onClick={handleClose}>
                          <ThemeProvider theme={theme}>
                            <Button><h1  className="text-4xl text-white">SERVICES</h1></Button>
                          </ThemeProvider>
                      </MenuItem>
                    </Link>
                    <Link  to="/contact"> 
                    <MenuItem onClick={handleClose}>                  
                        <ThemeProvider theme={theme}>
                          <Button><h1  className="text-4xl text-white">CONTACT</h1></Button>
                        </ThemeProvider>
                    </MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>
                    <div className="text-center w-full flex flex-row justify-center items-center pt-8">
                      <div>
                        <a className="" href="https://www.facebook.com/CrownCleanKft">
                        <ThemeProvider theme={theme}> 
                          <Button className="w-20 h-20" variant="text" type="submit" size="large">
                          <FaFacebook className="text-2xl"/>
                          </Button>
                        </ThemeProvider>
                        </a>
                      </div>
                      <div>
                        <a className="pl-12" href="https://www.tiktok.com/@crowncleancarcosmetics">
                        <ThemeProvider theme={theme}> 
                          <Button className="w-20 h-20" variant="text" type="submit" size="large">
                            <FaTiktok className="text-2xl"/>
                          </Button>
                        </ThemeProvider>
                        </a>
                      </div>  
                    </div>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
  );
}