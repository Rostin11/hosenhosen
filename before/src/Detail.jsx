import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

export default function Detail({addToCart}) {
  const [chosenSize, setChosenSize] = useState("");
  const [chosenSku, setChosenSku] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
    const {data: products, loading, error} = useFetch(
        "products"
    );

    console.log("TESTTESTESTSET")
    console.log(products)

    if (loading) return <Spinner />;
  if (!products[id-1]) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id="detail">
      <h1>{products[id-1].name}</h1>
      <p>{products[id-1].description}</p>
      <p id="price">${products[id-1].price}</p>
        <select
            id="size"
            value={chosenSize}
            onChange={changeChosenSize}
        >
            <option value="">Choose size...</option>
            {getSizeOptions()}
        </select>

      <p>
        <button className="btn btn-primary" onClick={addToCartAndNavigate}>
          Add to cart
        </button>
      </p>
      <img src={`/images/${products[id-1].image}`} alt={products[id-1].category} />
    </div>
  );

  function getSizeOptions(){

      return (
          <>
              {products[id-1].skus.map(function(sku){
                  return (<option value={sku.size}>{sku.size}</option>)
              })}
          </>
  )
  }

    function changeChosenSize(e){
        setChosenSize(e.target.value)


        let filter = products[id-1].skus.filter(it => it.size.toString() === e.target.value.toString() );

        setChosenSku(filter[0])


    }

  function addToCartAndNavigate(){
      addToCart({category: products[id-1].category, sku: chosenSku , description: products[id-1].description, id: products[id-1].id, image: products[id-1].image,name: products[id-1].name, price: products[id-1].price, size: chosenSize, chosenSku: chosenSku})
      navigate("/cart")
  }
}
