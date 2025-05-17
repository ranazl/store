import { createContext, useContext } from "react";
import { UseLocalStorage } from "../hooks/UseLocalStorage";

interface Ichildren {
  children: React.ReactNode;
}

interface cartItem {
  id: number;
  qyt: number;
}

interface IshopingContext {
  cartItems: cartItem[];
  handleIncreaseProduct: (id: number) => void;
  handleDecreaseProduct: (id: number) => void;
  getProductQyt: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQyt: number;
}

const shopingContext = createContext({} as IshopingContext);

export const UseshopingContext = () => {
  return useContext(shopingContext);
};

function ShopingProvider({ children }: Ichildren) {
  const [cartItems, setCartItems] = UseLocalStorage<cartItem[]>("cartItems",[]);

  const handleIncreaseProduct = (id: number) => {
    setCartItems((prev) => {
      const selectedItems = prev.find((item) => item.id === id);
      if (!selectedItems) {
        return [...prev, { id: id, qyt: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, qyt: item.qyt + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProduct = (id: number) => {
    setCartItems((prev) => {
      const selectedItems = prev.find((item) => item.id === id);
      if (selectedItems?.qyt === 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, qyt: item.qyt - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQyt = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qyt || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartQyt = cartItems.reduce((totalQyt,item) => totalQyt + item.qyt, 0);

  return (
    <shopingContext.Provider
      value={{
        cartItems,
        handleIncreaseProduct,
        handleDecreaseProduct,
        getProductQyt,
        handleRemoveProduct,
        cartQyt
      }}
    >
      {children}
    </shopingContext.Provider>
  );
}

export default ShopingProvider;
