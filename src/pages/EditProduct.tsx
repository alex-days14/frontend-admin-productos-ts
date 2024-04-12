import {
    Link,
    Form,
    useActionData,
    ActionFunctionArgs,
    redirect,
    LoaderFunctionArgs,
    useLoaderData,
} from "react-router-dom";
import Error from "../components/Error";
import { updateProduct, getProductById } from "../services/ProductService";
import { Product } from "../types";
import ProductForm from "../components/ProductForm";

export async function loader({ params }: LoaderFunctionArgs) {
    if (params.id) {
        const product = await getProductById(+params.id);
        return product ? product : redirect("/");
    } else {
        return redirect("/");
    }
}

export async function action({ request, params }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
    
    let error = "";
    if (Object.values(data).includes("")) {
        error = "Todos los campos son obligatorios";
    }
    if (error.length) {
        return error;
    }
    if(params.id) {
        await updateProduct(data, +params.id);
        return redirect("/");
    }
}

const availabilityOptions = [
    { value: true, text: "Disponible" },
    { value: false, text: "No Disponible" },
];

function EditProduct() {
    const error = useActionData() as string;
    const product = useLoaderData() as Product;

    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-4xl text-slate-600">
                    Editar Producto
                </h2>

                <Link
                    to="/"
                    className="p-3 px-5 text-xm uppercase font-bold text-white rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 via-purple-500 bg-[length:200%] transition-all bg-left hover:bg-right"
                >
                    Volver a Productos
                </Link>
            </div>

            <Form className="mt-10" method="PUT">
                {error && <Error>{error}</Error>}

                <ProductForm product={product}/> 

                <div className="mb-4">
                    <label className="text-gray-800" htmlFor="price">
                        Disponibilidad:
                    </label>
                    <select
                        id="availability"
                        className="mt-2 block w-full p-3 bg-gray-50 text-slate-800 focus:outline-none focus:ring-indigo-500 focus:ring-2 rounded"
                        name="availability"
                        defaultValue={product.availability.toString()}
                    >
                        {availabilityOptions.map((option) => (
                            <option
                                key={option.text}
                                value={option.value.toString()}
                            >
                                {option.text}
                            </option>
                        
                        ))}
                    </select>
                </div>
                <input
                    type="submit"
                    className="mt-5 w-full bg-indigo-500 p-2 text-white font-bold text-lg cursor-pointer rounded focus:outline-none focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2"
                    value="Guardar Cambios"
                />
            </Form>
        </>
    );
}

export default EditProduct;
