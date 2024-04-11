import { Link, Form, useActionData, ActionFunctionArgs, redirect } from "react-router-dom"
import Error from "../components/Error"
import { addProduct } from "../services/ProductService"

export async function action({request}: ActionFunctionArgs){
    const data = Object.fromEntries(await request.formData())
    
    let error = ''
    if(Object.values(data).includes('')){
        error = 'Todos los campos son obligatorios'
    }
    if(error.length){
        return error
    }

    await addProduct(data)

    return redirect('/')
}

function NewProduct() {

    const error = useActionData() as string

    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-4xl text-slate-600">Registrar Producto</h2>

                <Link to="/" className="p-3 px-5 text-xm uppercase font-bold text-white rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 via-purple-500 bg-[length:200%] transition-all bg-left hover:bg-right">
                    Volver a Productos
                </Link>
            </div>

            <Form
                className="mt-10"
                method="POST"      
            >
                {error && <Error>{error}</Error>}
            
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="name"
                    >Nombre Producto:</label>
                    <input 
                        id="name"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50 text-slate-800 focus:outline-none focus:ring-indigo-500 focus:ring-2 rounded"
                        placeholder="Nombre del Producto"
                        name="name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="price"
                    >Precio:</label>
                    <input 
                        id="price"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-50 text-slate-800 focus:outline-none focus:ring-indigo-500 focus:ring-2 rounded"
                        placeholder="Precio Producto. ej. 200, 300"
                        name="price"
                    />
                </div>
                <input
                type="submit"
                className="mt-5 w-full bg-indigo-500 p-2 text-white font-bold text-lg cursor-pointer rounded focus:outline-none focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2"
                value="Registrar Producto"
                />
            </Form>
        </>
    )
}

export default NewProduct
