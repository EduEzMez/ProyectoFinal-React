import { useState } from "react";

function ItemCount(){
    const [counter, setCounter] = useState(0);
    
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    )

}

export default ItemCount;




// const ItemCount =({stock, initial, onAdd}) => {
//     const [quantity, setQuantity] = useState(initial)

//     const incrementar = () => {
//         if (quantity < stock)
//             setQuantity(quantity + 1)
//     }
//     const decrementar = () => {
//         if (quantity > 1)
//             setQuantity(quantity - 1)
//     }

//     return(
//         <div>
//             <p>{initial}</p>
//             <button onClick={() => incrementar}></button>
//             <button onClick={() => decrementar}></button>
//         </div>
//     )


// }