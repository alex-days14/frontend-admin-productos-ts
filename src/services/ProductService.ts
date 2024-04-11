import { safeParse } from "valibot"
import { DraftProductSchema, ProductsSchema } from "../types"
import axios from "axios"

type NewProductData = {
    [k: string]: FormDataEntryValue
}

export async function addProduct(data: NewProductData){
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/products`
        const result = safeParse(DraftProductSchema, {...data, price: +data.price})
        if(result.success){
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        }else{
            throw new Error("Datos no válidos")
        }
    } catch (error) {
        console.log(error)
    }
}
export async function getProducts(){
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/products`
        const { data } = await axios.get(url)
        const result = safeParse(ProductsSchema, data.data)
        if(result.success){
            return result.output
        }else{
            throw new Error("Error de respuesta")
        }
    } catch (error) {
        console.log(error)
    }
}