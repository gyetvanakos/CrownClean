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
                    <MenuItem onClick={handleClose}>
                        <Link to="/"> 
                            <ThemeProvider theme={theme}>
                                <Button>Home</Button>
                            </ThemeProvider>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/blog"> 
                        <ThemeProvider theme={theme}>
                          <Button>Blog</Button>
                        </ThemeProvider>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link  to="/about"> 
                        <ThemeProvider theme={theme}>
                          <Button>About</Button>
                        </ThemeProvider>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link  to="/services"> 
                        <ThemeProvider theme={theme}>
                          <Button>Services</Button>
                        </ThemeProvider>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link  to="/contact"> 
                        <ThemeProvider theme={theme}>
                          <Button>Contact</Button>
                        </ThemeProvider>
                      </Link>
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