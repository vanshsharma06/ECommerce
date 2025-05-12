import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Favorite, DeleteOutline, Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Wishlist() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      quantity: 1,
      image: "src/assets/ecommerce-svgrepo-com.svg",
    },
    {
      id: 2,
      name: "Smartphone Case",
      price: 24.99,
      quantity: 2,
      image: "src/assets/ecommerce-svgrepo-com.svg",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 199.99,
      quantity: 1,
      image: "src/assets/ecommerce-svgrepo-com.svg",
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 10.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="cart-header flex items-center mb-8">
        <Favorite className="text-red-500 mr-3" style={{ fontSize: 32 }} />
        <h1 className="text-2xl font-bold">Your Wishlist</h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-xl mb-4">Your cart is empty</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
            className="bg-red-500 hover:bg-red-600"
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex border-b py-4 items-center"
              >
                <img
                  src={item.image || "src/assets/ecommerce-svgrepo-com.svg"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    SKU: PRD-{item.id}00{item.id}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      className="p-1 rounded-full border"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Remove fontSize="small" />
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      className="p-1 rounded-full border"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Add fontSize="small" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="text-red-500 mt-2 flex items-center text-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    <DeleteOutline fontSize="small" className="mr-1" /> Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <Button
                variant="outlined"
                onClick={() => navigate("/")}
                className="border-gray-300 text-gray-700"
              >
                Continue Shopping
              </Button>
            </div>
          </div>

          <div className="cart-summary bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button
              variant="contained"
              fullWidth
              className="bg-red-500 hover:bg-red-600 mt-6"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
