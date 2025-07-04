import ShoppingListItem from "./ShoppingListItem"
export default function ShoppingList({item, quantity, completed}){
    return (
        <ul>
            {item.map((i) =>(
                 <ShoppingListItem 
                 key={i.id}
                 item={i.item}
                 quantity={i.quantity}
                 completed={i.completed}
                 />
            ))}

        </ul>
    )
}