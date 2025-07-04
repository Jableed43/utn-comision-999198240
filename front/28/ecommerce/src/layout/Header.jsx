import { AppBar, Box, Button, Container, Link, Typography } from '@mui/material'
import React from 'react'

function Header() {

    const pages = [
        { name: 'Inicio', path: '/' },
        { name: 'Products', path: '/products' },
    ]

  return (
    <AppBar position='static' sx={{ backgroundColor: 'gray'}} >
        <Container maxWidth='xl' >
            <Box>
                {pages.map(( page ) => (
                    <Button key={page.name} href={page.path} LinkComponent={Link} >
                        <Typography sx={{ color: 'white', textTransform: "capitalize" }} >
                        { page.name }
                        </Typography>
                    </Button>
                ))}
            </Box>
        </Container>
    </AppBar>
  )
}

export default Header