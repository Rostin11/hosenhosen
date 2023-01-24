import React from "react";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";

export default function Cart({cart, updateQuantity}) {

    console.log("DEBUG G")
    console.log(cart)

    const {data: products, loading, error} = useFetch(
        "products"
    );

    function renderItem(itemInCart) {
        const {id, sku, quantity} = itemInCart;


        const {price, name, image, skus} = products.find(
            (p) => p.id === parseInt(id)
        );

        return (
            <li key={sku} className="cart-item">
                <img src={`/images/${image}`} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>${price}</p>
                    <p>Size: {sku.size}</p>
                    <p>
                        <select
                            aria-label={`Select quantity for ${name} size ${sku.size}`}
                            onChange={(e) => updateQuantity(sku, parseInt(e.target.value))}
                            value={quantity}
                        >
                            <option value="0">Remove</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </p>
                </div>
            </li>
        );

    }

    if (loading) return <Spinner/>;
    if (error) throw error;


    function calculateCart(cart) {
        console.log("RAWRARW")
        var gesamtPreis = 0;
        cart.forEach(function (value) {
            gesamtPreis += value.quantity * value.price
        });
        return <>
            Gesamtpreis: {gesamtPreis}
        </>
    }

    return (
        <section id="cart">
            <h1>Cart</h1>
            <ul>{cart.map(renderItem)}</ul>
            <div>
                {calculateCart(cart)}
            </div>
        </section>
    );
}
