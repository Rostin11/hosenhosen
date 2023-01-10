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
  const { data: product, loading, error } = useFetch(`products/${id}`);

  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
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
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );

  function getSizeOptions(){

      return (
          <>
              {product.skus.map(function(sku){
                  return (<option value={sku.size}>{sku.size}</option>)
              })}
          </>
  )
  }

    function changeChosenSize(e){
        setChosenSize(e.target.value)


        let filter = product.skus.filter(it => it.size.toString() === e.target.value.toString() );

        setChosenSku(filter[0])


    }

  function addToCartAndNavigate(){
      addToCart({category: product.category, sku: chosenSku , description: product.description, id: product.id, image: product.image,name: product.name, price: product.price, size: chosenSize, chosenSku: chosenSku})
      navigate("/cart")
  }
}
