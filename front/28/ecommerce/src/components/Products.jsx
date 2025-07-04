import { Typography, Grid, Card, CardContent } from '@mui/material'
import React from 'react'

function Products() {

    const products = [
        {
            name: 'Producto 1',
            price: 'Precio 1',
            description: 'Descripcion 1',
            category: 'Categoria 1'
        },
         {
            name: 'Producto 2',
            price: 'Precio 2',
            description: 'Descripcion 2',
            category: 'Categoria 2'
        },
         {
            name: 'Producto 3',
            price: 'Precio 3',
            description: 'Descripcion 3',
            category: 'Categoria 3'
        },
         {
            name: 'Producto 4',
            price: 'Precio 4',
            description: 'Descripcion 4',
            category: 'Categoria 4'
        }
    ]

  return (
    <>
    <Typography variant='h4' >
        Products
    </Typography>

    <Grid container spacing={3} >
        { products.map((product) => (
        <Grid item key={product.name} >
            <Card>
                <CardContent>
                    <Typography variant='h6' >
                        {product.name}
                    </Typography>

                     <Typography variant='body1' >
                        {product.price}
                    </Typography>

                     <Typography variant='body2' >
                        {product.description}
                    </Typography>

                     <Typography variant='body2' >
                        {product.category}
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
        ))}
    </Grid>
    </>
  )
}

export default Products