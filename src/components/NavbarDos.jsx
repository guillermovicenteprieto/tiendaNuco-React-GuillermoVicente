import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const NavbarDos = () => {
    return (
        <div>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <Typography variant="h6">
                  he, ho, let´s go!
                </Typography>
              </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavbarDos
