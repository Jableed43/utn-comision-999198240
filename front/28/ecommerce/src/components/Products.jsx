import { Typography, Grid, Card, CardContent } from '@mui/material'
import React from 'react'
import useGetProducts from '../hooks/products/useGetProducts'

function Products() {

    const {error, loading, products} = useGetProducts()

    if(loading){
        return ( <h2> Cargando productos </h2> )
    }

    if(error){
        return ( <h2> {error} </h2> )
    }

    if(!products || products.length === 0){
        return ( <h2>No hay productos disponibles</h2> )
    }

  return (
    <>
    <Typography variant='h4' >
        Products
    </Typography>

    <Grid container spacing={3} flexDirection={'row'} justifyContent={'center'} >
        { products.map((product) => (
        <Grid item key={product.id} sx={{ maxWidth: '22%' }} >
            <Card>
                <CardContent>
                    <Typography variant='h6' >
                       Name: {product.name}
                    </Typography>

                    <img style={{maxWidth: '70%'}} src={product.avatar} alt="" />

                     <Typography variant='body1' >
                       Price: ${product.price}
                    </Typography>

                     <Typography variant='body2' >
                       Description: {product.description}
                    </Typography>

                     <Typography variant='body2' >
                       Category: {product.category.name}
                    </Typography>

                     <Typography variant='body2' >
                       Stock: {product.stock}
                    </Typography>

                     <Typography variant='body2' >
                       Status: {product.status}
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