import { Link } from "react-router-dom";
import { UseshopingContext } from "../../context/shopingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { cartQyt } = UseshopingContext();
  return (
    <div className="h-15 border-b shadow flex justify-between flex-row-reverse items-center">
      <ul className="flex">
        <li className="mr-5">
          <Link to="/Store">فروشگاه</Link>
        </li>
        <li className="mr-5">
          <Link to="/">خانه</Link>
        </li>
      </ul>

      <div>
        <Link to="/Cart" className="relative">
          <FontAwesomeIcon icon={faShoppingCart} className="ml-5" />
          {cartQyt !== 0 ? (
            <span className="absolute w-5 h-5 rounded-full text-white bg-red-700 flex items-center justify-center -right-4 top-0 text-xs">
              {cartQyt}
            </span>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
