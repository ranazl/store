import { useEffect, useState } from "react";
import Button from "./Button";
import { getProductId } from "./services/api";
import { IProduct } from "../types/Server";
import { UseshopingContext } from "../context/shopingContext";
import { Link } from "react-router-dom";

interface ICartItems {
  id: number;
  qty: number;
}

function CartItems({ id, qty }: ICartItems) {
  const { handleIncreaseProduct, handleDecreaseProduct, handleRemoveProduct } =
    UseshopingContext();

  const [products, setProducts] = useState<IProduct>();

  useEffect(() => {
    getProductId(id).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2 mx-5 border-b-gray-400">
      <Link to={`/ProductPage/${id}`}>
        <img src={products?.image} alt="camera" className="rounded w-25" />
      </Link>
      <div className="mr-5 mt-2">
        <h3 className="text-right">{products?.title}</h3>
        <Button
          onClick={() => handleRemoveProduct(id)}
          className="mr-3 rounded"
          variant="danger"
        >
          remove
        </Button>
        <Button
          onClick={() => handleDecreaseProduct(id)}
          className="rounded"
          variant="primary"
        >
          -
        </Button>
        <span className="mx-2">{qty}</span>
        <Button
          onClick={() => handleIncreaseProduct(id)}
          className="rounded"
          variant="primary"
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default CartItems;
