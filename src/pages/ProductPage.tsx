import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { getProductId } from "../components/services/api";
import { IProduct } from "../types/Server";
import { UseshopingContext } from "../context/shopingContext";

function ProductPage() {
  const params = useParams<{ id: string }>();

  const [products, setProducts] = useState<IProduct>();

  const { handleIncreaseProduct, handleDecreaseProduct, getProductQyt, handleRemoveProduct } =
    UseshopingContext();

  useEffect(() => {
    getProductId(params.id as string).then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="h-90 shadow mt-4 grid grid-cols-12">
      <div className="col-span-8 mt-3">
        <h1 className="text-right font-bold">{products?.title}</h1>
        <div>
          <p className="text-right">قیمت: {products?.price}$</p>
          <p className="text-right pl-10">{products?.description}</p>
        </div>
      </div>
      <div className="col-span-4 p-4 flex flex-col items-center space-y-4 px-10">
        <img src={products?.image} alt="camera" className="rounded " />
        {getProductQyt(parseInt(params.id as string)) === 0 ? (
          <Button
            onClick={() => handleIncreaseProduct(parseInt(params.id as string))}
            className="w-full py-3 rounded-md"
            variant="primary"
          >
            اضافه به سبد
          </Button>
        ) : (
          <>
            <div className="grid grid-cols-3">
              <Button
                onClick={() =>
                  handleDecreaseProduct(parseInt(params.id as string))
                }
                className="w-full p-4 rounded-md"
                variant="primary"
              >
                -
              </Button>
              <span className="flex justify-center items-center">
                {getProductQyt(parseInt(params.id as string))}
              </span>
              <Button
                onClick={() =>
                  handleIncreaseProduct(parseInt(params.id as string))
                }
                className="w-full p-4 rounded-md"
                variant="primary"
              >
                +
              </Button>
            </div>
            <Button
              onClick={() =>
                handleRemoveProduct(parseInt(params.id as string))
              }
              className="w-full py-3 rounded-md"
              variant="danger"
            >
              حذف
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
