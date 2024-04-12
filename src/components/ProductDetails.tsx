import { ActionFunctionArgs, Form, useNavigate, redirect, useFetcher } from "react-router-dom";
import { cashify } from "../helpers";
import { Product } from "../types";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
    product: Product;
};

export async function action({params}: ActionFunctionArgs){
    if(params.id){
        await deleteProduct(+params.id);
        return redirect("/");
    }
}

function ProductDetails({ product }: ProductDetailsProps) {

    const fetcher = useFetcher();
    const navigate = useNavigate();

    const isAvailable = product.availability ? "Disponible" : "No disponible";

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">{product.name}</td>
            <td className="p-3 text-lg text-gray-800 text-center">
                {cashify(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">
                <fetcher.Form method="POST">
                    <button type="submit" name="id" value={product.id} className={`${product.availability ? "text-black" : "text-red-600"} rounded-lg text-xs border uppercase font-bold w-full p-2 border-slate-300 cursor-pointer`}>
                        {isAvailable}
                    </button>
                </fetcher.Form>
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex justify-center gap-3">
                    <button
                        onClick={() =>
                            navigate(`/productos/${product.id}/editar`)
                        }
                        className="bg-gradient-to-tr from-slate-900 bg-slate-700 hover:shadow-lg transition-all rounded-lg py-3 px-6 text-xs text-white font-bold uppercase"
                    >
                        Editar
                    </button>

                    <Form method="DELETE" action={`productos/${product.id}/eliminar`}>
                        <input type="submit" className="bg-gradient-to-tr from-rose-700 bg-rose-500 hover:shadow-lg transition-all rounded-lg py-3 px-6 text-xs text-white font-bold uppercase cursor-pointer" value="Eliminar"/>
                    </Form>
                </div>
            </td>
        </tr>
    );
}

export default ProductDetails;
