import React, { useState, useEffect } from "react";

import "./App.css";
import Cart from "./Cart";
//TODO Wieder einfügen
import ProductList from "./ProductList";
//import { getCartItems } from "./cartService.js";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";

export default function App() {
    const [cart, setCart] = useState([]);


    const initCart = () => {
        try {
            return JSON.parse(localStorage.getItem("cart")) ? [] : null;
        } catch {
            console.error("The cart could not be parsed into JSON.");
            return [];
        }
    };


    useEffect(() => {
        // state from fetch
        //TODO Wieder einfügen
        //getCartItems().then((response) => setCart(response));

        // set localstorage
        localStorage.setItem("cart", JSON.stringify(cart));
    }, []);


    // cart functions
    function addToCart({ id, sku, name, price }) {
        setCart((items) => {
            const itemInCart = items.find((i) => i.sku === sku);
            if (itemInCart) {
                // Return new array with the matching item replaced
                return items.map((i) =>
                    i.sku === sku ? { ...i, quantity: i.quantity + 1, name, price } : i
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
                : cart.map((i) => (i.sku === sku ? { ...i, quantity } : i));
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
        console.log(cart);
    }
    // cart function
    function emptyCart() {
        // set an empty array
        setCart([]);
        console.log("yuhui, its empty from App");
    }

        //addToCart({id:1,sku:"xxxx",name:"Tim",price:2})

    //return (
    //    <div className="container">
    //        <header className="container h3">
    //            Shopping-Cart-functional with JAVA & REACT
    //            <h4>
    //                Version-1 (using props and Lifting State to a common parent (5))
    //            </h4>
    //        </header>
    //        <Cart
    //            cart={cart}
    //            updateQuantity={updateQuantity}
    //            deleteItem={deleteItem}
    //            emptyCart={emptyCart}
    //        />
    //        <ProductList addToCart={addToCart} />
    //        <CartTest cart={cart} />
    //        <footer>@bbw 2020</footer>
    //    </div>
    //);

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
        return (
            <div className="container">

                {/*todo*/}
                {/*<ProductList addToCart={addToCart} />*/}
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
