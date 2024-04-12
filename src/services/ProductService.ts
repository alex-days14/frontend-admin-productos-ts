import { coerce, number, parse, safeParse } from "valibot";
import {
    DraftProductSchema,
    Product,
    ProductsSchema,
    ProductSchema,
} from "../types";
import axios from "axios";
import { toBoolean } from "../helpers";

type NewProductData = {
    [k: string]: FormDataEntryValue;
};

export async function addProduct(data: NewProductData) {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/products`;
        const result = safeParse(DraftProductSchema, {
            ...data,
            price: +data.price,
        });
        if (result.success) {
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price,
            });
        } else {
            throw new Error("Datos no válidos");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getProducts() {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/products`;
        const { data } = await axios.get(url);
        const result = safeParse(ProductsSchema, data.data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error("Error de respuesta");
        }
    } catch (error) {
        console.log(error);
    }
}
export async function getProductById(id: Product["id"]) {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/products/${id}`;
        const { data } = await axios.get(url);
        const result = safeParse(ProductSchema, data.data);
        if (result.success) {
            return result.output;
        } else {
            throw new Error("Error de respuesta");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function updateProduct(data: NewProductData, id: Product["id"]) {
    try {
        const NumberSchema = coerce(number(), Number);

        const url = `${import.meta.env.VITE_BACKEND_URL}/products/${id}`;
        const result = safeParse(ProductSchema, {
            ...data,
            id,
            price: parse(NumberSchema, data.price),
            availability: toBoolean(data.availability.toString()),
        });
        if (result.success) {
            await axios.put(url, result.output);
        } else {
            throw new Error("Datos no válidos");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function deleteProduct(id: Product["id"]) {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/products/${id}`;
        await axios.delete(url);
    } catch (error) {
        console.log(error);
    }
}

export async function updateAvailability(id: Product["id"]) {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/products/${id}`;
        const { data } = await axios.patch(url);
        const result = safeParse(ProductSchema, data.data);
        console.log(result);
        if(result.success){
            return result.output
        }else {
            throw new Error("Error de respuesta");
        }
    } catch (error) {
        console.log(error);
    }
}
