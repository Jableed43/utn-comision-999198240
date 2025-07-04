import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ProductsPage from './layout/ProductsPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/products',
        element: <ProductsPage />
    }
])