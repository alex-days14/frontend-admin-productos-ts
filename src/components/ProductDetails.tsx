import { Product } from "../types"

type ProductDetailsProps = {
    product: Product
}

function ProductDetails({product}: ProductDetailsProps) {
    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {product.price}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {product.availability}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                
            </td>
        </tr> 
    )
}

export default ProductDetails
