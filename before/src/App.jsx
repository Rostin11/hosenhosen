import React, {useEffect, useState} from "react";

import "./App.css";
import Cart from "./Cart";
//TODO Wieder einfügen
//import { getCartItems } from "./cartService.js";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import {Route, Routes} from "react-router-dom";
import Detail from "./Detail";

export default function App() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
    console.log("CART IS:")
    console.log(localStorage.getItem("cart"))

    const initCart = () => {
        try {

        } catch {
            console.error("The cart could not be parsed into JSON.");
            return [];
        }
    };


    // cart functions
    function addToCart({ id, sku, name, price }) {
        setCart((items) => {
            const itemInCart = items.find((i) => i.sku.sku === sku.sku);

            if (itemInCart) {
                // Return new array with the matching item replaced
                return items.map((i) =>
                    i.sku.sku === sku.sku ? { ...i, quantity: i.quantity + 1, name, price } : i
                );
            } else {
                // Return new array with the new item appended
                return [...items, { id, sku, quantity: 1, name, price }];
            }
        });
    }
    // cart function
    function updateQuantity(sku, quantity) {
        setCart((cart) => {
            return quantity === 0
                ? cart.filter((i) => i.sku !== sku)
                : cart.map((i) => (i.sku === sku ? {...i, quantity} : i))
        });

    }
    // cart function
    function deleteItem(item) {
        // array kopieren
        let newArray = cart.slice(0);
        let indexToRemove;
        newArray.some((it, index) => {
            if (it.id === item.id) {
                indexToRemove = index;
                return true;
            }
            return false;
        });
        //cart.splice(indexToRemove, 1);
        newArray = newArray.filter((_, i) => i !== indexToRemove);
        setCart(newArray);
    }
    // cart function
    function emptyCart() {
        // set an empty array
        setCart([]);
    }

    return (
        <>
            <div className="content">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={
                            mainPage()
                        } />
                        <Route path="/:category" element={<Products />} />
                        <Route path="/:category/:id" element={<Detail
                            addToCart={addToCart}
                        />} />
                        <Route path="/cart" element={
                            <Cart
                                cart={cart}
                                updateQuantity={updateQuantity}
                                deleteItem={deleteItem}
                                emptyCart={emptyCart}
                            />
                        } />
                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    );

    function mainPage(){

        initCart()

        return (
            <div className="container">

                {/*todo*/}
                {/*<Products addToCart={addToCart} />*/}
                {/*<CartTest cart={cart} />*/}

                <h1>Hallo</h1>

            </div>
        )
    }
}



function CartTest({ cart }) {
    return (
        <div className="container">
            <header className="container h3">Cart-Test</header>
            <ul>
                {cart.map((item, id) => {
                    return (
                        <li key={item.sku}>
                            {item.sku} - {item.name} {item.quantity}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
