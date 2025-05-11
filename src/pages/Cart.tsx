import Button from "../components/Button";
import CartItems from "../components/CartItems";
import { UseshopingContext } from "../context/shopingContext"

function cart() {
    const { cartItems } = UseshopingContext();
  return (
    <div>
      <div>
        {cartItems.map((item)=> (<CartItems id={item.id} qty={item.qyt}/>))}
      </div>
      <div className="bg-gray-200 rounded p-6 mx-5">
        <p className="text-right">قیمت کل: 1,0000</p>
        <p className="text-right">تخفیف شما: 200</p>
        <p className="text-right">قیمت نهایی: 800</p>
      </div>
      <Button className="mt-2 ml-5 rounded p-2" variant="success">
        ثبت سفارش
      </Button>
    </div>
  );
}

export default cart;
