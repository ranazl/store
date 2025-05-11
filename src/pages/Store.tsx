import { useEffect, useState } from "react";
import ProductItems from "../components/ProductItems";
import { Link } from "react-router-dom";
import {getProducts} from "../components/services/api"
import { IProduct } from "../types/Server";

function Store() {

  const [products,setProducts] = useState<IProduct[]>([]);

  useEffect(()=>{
    getProducts().then((result)=>{
      setProducts(result)
    })
  },[]);

  return (
    <>
      <h2 className="text-right mt-5">جدیدترین محصولات</h2>
      <div className="grid grid-cols-4 m-20 gap-5">
        {products.map((item)=>(
           <Link key={item.id} to={`/ProductPage/${item.id}`}>
           <ProductItems {...item}/>
         </Link>
        ))}
        
      </div>
    </>
  );
}

export default Store;
