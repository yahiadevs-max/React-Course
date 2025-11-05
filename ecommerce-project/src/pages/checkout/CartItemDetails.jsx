import axios from 'axios';
import {useState} from 'react';
import { formatMoney } from '../../utils/money';


export function CartItemDetails({cartItem, loadCart}) {

const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
const [quantity, setQuantity] = useState(cartItem.quantity);

const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

const updatingQuantity= async () => {
  if (isUpdatingQuantity) {
    setIsUpdatingQuantity(false);
  } else
    setIsUpdatingQuantity(true); 
  };

  const updateQuantity= async () => {
  if (isUpdatingQuantity) {
    await axios.put(`api/cart-items/${cartItem.productId}`, {
      quantity: Number(quantity)
    });
    await loadCart();
    setIsUpdatingQuantity(false);
  } else
    {setIsUpdatingQuantity(true);}
    
  };

   const updateQuantityInput = (event) => {
    setQuantity(event.target.value);
  };

const handleQuantityKeyDown = (event) => {
    const keyPressed = event.key;

    if (keyPressed === 'Enter') {
      updateQuantity();

    } else if (keyPressed === 'Escape') {
      setQuantity(cartItem.quantity);
      setIsUpdatingQuantity(false);
    }
  };


  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:  {isUpdatingQuantity ?
              <select className = "quantity-textbox" type="text"
              value={quantity} onChange={updateQuantityInput}
              onKeyDown={handleQuantityKeyDown}>
                 <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
               </select>:
              <span className="quantity-label">{cartItem.quantity}</span>}
          </span>
          {!isUpdatingQuantity ?
          <span className="update-quantity-link link-primary" onClick ={updatingQuantity}>
            Update
          </span> : <span className="save-quantity-link link-primary" onClick={updateQuantity}>
            Save
          </span>
          }
          <span className="delete-quantity-link link-primary"
          onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}