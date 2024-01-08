import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
    title: "Shopping Cart",
    description: "Counter Client Side",
}

export default function CounterPage() {

    // aca puede haber una conexion a base de datos o un fetch que se ejecute en el servidor

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span> Productos en el carrito</span>
            <CartCounter value={50} />
        </div>
    );
}