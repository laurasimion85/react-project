// import React, {Component} from 'react';
// import '../scss/_variables.scss';
// import '../scss/main.scss';

// class CartPage extends Component {
//     constructor(props) {
//         super(props);

//         this.countItems = this.countItems.bind(this);
//         this.totalsum = this.totalsum.bind(this);
//     }

//     countItems(cart) {
//         let cartIds = [];
//         let cartIdCount = {};

//         for (let i = 0; i < cart.length; i++) {
//             if (cartIds.includes(cart[i].id)) {
//                 cartIdCount[cart[i].id] += 1;

//             } else {
//                 cartIds.push(cart[i].id);
//                 cartIdCount[cart[i].id] = 1;

//             }

//         }

//         console.log("cartIdCount", cartIdCount);
//         console.log("cartIds", cartIds);


//         return cartIdCount

//     }

//     totalsum = (cart) => {
//         let total = 0;

//         for (let i = 0; i < cart.length; i++) {
//             total += Number(cart[i].price);
//             console.log(total);
//             console.log(cart[i].price);
//         }
//         return total.toFixed(2);

//     }


//     netCart = (cart) => {

//         let cartIds = [];
//         let netCart = [];


//         for (let i = 0; i < cart.length; i++) {
//             if (!(cartIds.includes(cart[i].id))) {
//                 cartIds.push(cart[i].id);
//                 netCart.push(cart[i]);

//             }
//         }
//         return (netCart);

//     };

//     render() {
//         let cartIdCounts = this.countItems(this.props.CartItems);
//         let netCart = this.netCart(this.props.CartItems);
//         let total = this.totalsum(this.props.CartItems);
//         return (

//             <div className="cart__container">
//                 <h1>Your Cart</h1>
//                 {netCart.map((item) => (

//                     <CartItem key={item.id} item={item} count={cartIdCounts[item.id]}
//                               subtotal={Number(cartIdCounts[item.id] * item.price).toFixed(2)}/>

//                 ))}

//                 <div className="total">
//                     <p>Order Summary</p>
//                     <table>
//                         <tbody>
//                         <tr>
//                             <td>Items ({netCart.length})</td>
//                             <td>{total}</td>
//                         </tr>
//                         <tr>
//                             <td>Shipping Standard</td>
//                             <td>Free</td>
//                         </tr>
//                         <tr>
//                             <th>Estimated Total:</th>
//                             <th>{total} €</th>
//                         </tr>
//                         </tbody>
//                     </table>
//                     <button className="checkout">Proceed to checkout</button>

//                 </div>

//             </div>


//         )
//     }
// }

// class CartItem extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <>
//                 <div className="cartItem__container">
//                     <div className="cartItem__cover">
//                         <img src={this.props.item.image}/>
//                     </div>

//                     <div className="cartItem__info">
//                         <div className="cartItem__title">
//                             <h1>{this.props.item.name}</h1>
//                             <h3>{this.props.item.author}</h3>
//                         </div>
//                         <div className="cartItem__price">
//                             <span> {this.props.count} x {this.props.item.price} €</span>
//                         </div>
//                         <div className="cartItem__price">
//                             <span>Subtotal = {this.props.subtotal} €</span>
//                         </div>
//                     </div>
//                 </div>
//             </>

//         )
//     }
// }

// export default CartPage;