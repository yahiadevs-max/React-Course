
import { DeliveryOptions } from './DeliveryOptions';
import {CartItemDetails} from './CartItemDetails'
import {DeliveryDate} from './DeliveryDate'

export function OrderSummary({cart, loadCart, deliveryOptions}){

  return (
              <div className="order-summary">
                {deliveryOptions.length > 0 && cart.map((cartItem) => {
                  const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                  });
    
                  return (
                    <div key={cartItem.productId} className="cart-item-container">
                      <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

                      <div key={cartItem.deliveryOptionId} className="cart-item-details-grid">
                        <CartItemDetails cartItem={cartItem} loadCart={loadCart} />
                        
                        <DeliveryOptions cartItem ={cartItem} loadCart={loadCart} deliveryOptions={deliveryOptions}/>

                      </div>
                    </div>
                  );
                })
                }
              </div>
  );
}