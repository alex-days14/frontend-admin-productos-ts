import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { action as productsAction, loader as productsLoader } from "./pages/Products";
import NewProduct, { action as newProductAction } from "./pages/NewProduct";
import EditProduct, {
    action as editProductAction,
    loader as editProductLoader,
} from "./pages/EditProduct";
import {action as deleteProductAction} from "./components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                action: productsAction,
                loader: productsLoader
            },
            {
                path: "productos/nuevo",
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: "productos/:id/editar",
                element: <EditProduct />,
                action: editProductAction,
                loader: editProductLoader
            },
            {
                path: "productos/:id/eliminar",
                action: deleteProductAction
            },
        ],
    },
]);
