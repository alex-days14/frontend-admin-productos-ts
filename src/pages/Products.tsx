import { Link, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/ProductService"
import { Product } from "../types"
import ProductDetails from "../components/ProductDetails"

export async function loader(){
    const products = await getProducts()
    if(products?.length) return products
    else return []
}

function Products() {

    const products = useLoaderData() as Product[]

    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-4xl text-slate-600">Productos</h2>

                <Link to="productos/nuevo" className="p-3 px-5 text-xm uppercase font-bold text-white rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 via-purple-500 bg-[length:200%] transition-all bg-left hover:bg-right">
                    Agregar Producto
                </Link>
            </div>

            <div className="p-2">
                <table className="w-full mt-5 table-auto">
                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-2">Producto</th>
                            <th className="p-2">Precio</th>
                            <th className="p-2">Disponibilidad</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <ProductDetails product={product}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Products
