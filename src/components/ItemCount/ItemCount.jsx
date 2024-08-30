import { useState } from "react";

const ItemCount =({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const incrementar = () => {
        if (quantity < stock)
            setQuantity(quantity + 1)
    }
    const decrementar = () => {
        if (quantity > 1)
            setQuantity(quantity - 1)
    }

    return(

    )


}

export default ItemCount;