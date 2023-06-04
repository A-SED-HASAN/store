import * as React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

import {
  Avatar,
  IconButton,
  Box,
  Stack,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  Tooltip,
  Button,
} from '@mui/material'
import { ExitToAppOutlinedIcon } from '../assets/icon'

import styled from 'styled-components'

export default function AccountMenu() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  const isUser = isAuthenticated && user

  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <Wrapper>
      {isUser ? (
        <Stack>
          <div>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              <Tooltip title={`Account manager for ${user.name}`}>
                <IconButton
                  className='icon-btn'
                  disableRipple
                  ref={anchorRef}
                  id='composition-button'
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup='true'
                  onClick={() => {
                    handleToggle()
                  }}
                  size='small'>
                  <Avatar sx={{ width: 70, height: 70 }}>
                    {isUser && user.picture && (
                      <img src={user.picture} alt={user.name} />
                    )}
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Popper
              sx={{
                zIndex: '10',
              }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement='bottom'
              transition
              disablePortal>
              {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <Modal>
                        <div style={{ justifyContent: 'end', display: 'flex' }}>
                          <Button
                            sx={{
                              color: 'red',
                              textTransform: 'capitalize',
                              marginLeft: '.8rem',
                            }}
                            onClick={() => {
                              logout({ returnTo: window.location.origin })
                            }}>
                            <ExitToAppOutlinedIcon />
                          </Button>
                        </div>
                        <div>
                          <div className='information'>
                            <Avatar sx={{ width: 90, height: 90 }}>
                              {isUser && user.picture && (
                                <img src={user.picture} alt={user.name} />
                              )}
                            </Avatar>

                            <div className='information-data'>
                              <h3>
                                {user.name.slice(0, 12) ||
                                  user.nickname.slice(0, 12)}
                              </h3>
                              <p>{user.email}</p>
                            </div>
                          </div>
                        </div>
                      </Modal>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Stack>
      ) : (
        <button className='auth-btn' onClick={loginWithRedirect}>
          login
        </button>
      )}
    </Wrapper>
  )
}
const Modal = styled.div`
  width: 330px;
  height: 10rem;
  padding: 0.7rem;
  background: var(--clr-grey-10);

  .information {
    gap: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .information-data {
      padding-top: 1rem;
      color: var(--clr-grey-2);
      p {
        line-height: 0;
        padding: 1rem 0;
        color: var(--clr-grey-3);
        font-size: 0.9rem;
      }
    }
  }
`

const Wrapper = styled.div`
  .auth-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
  }
`
