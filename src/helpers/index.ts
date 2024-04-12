export const cashify = (price: number) => {
    return price.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
    });
};

export const toBoolean = (value: string) => {
    return value.toLowerCase() === "true";
}