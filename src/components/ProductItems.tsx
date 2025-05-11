import { IProduct } from "../types/Server";

type TProducts = IProduct;

function ProductItems({title,price,description,image}:TProducts) {
  return (
    <div className="border shadow rounded-t bg-white pb-4 max-w-full w-fit">
      <img src={image} alt="camera" className="rounded-t max-h-[120px] w-full object-cover" />
      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h3>{title}</h3>
        <span>{price}$</span>
      </div>
      <div className="px-4 mt-2">
      <p className="line-clamp-2 text-right">
        {description}
      </p>
    </div>
    </div>
  );
}

export default ProductItems;
