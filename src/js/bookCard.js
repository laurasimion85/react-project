// import React, {Component} from 'react';
// import '../scss/_variables.scss';
// import '../scss/main.scss';

// export class BookCard extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div className={"books__list"}>
//                 {this.props.items.map(item => (
//                     <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
//                 ))}
//             </div>
//         )
//     }

//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         return false;

//     }
// }


// export class Item extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return(
//             <div className="book__container">
//                 <div className="book__cover">
//                     <img src={this.props.item.image}/>
//                 </div>

//                 <div className="book__info">
//                     <div className="book__title">
//                         <h1>{this.props.item.name}</h1>
//                         <h3>{this.props.item.author}</h3>
//                     </div>
//                     <div className="price">
//                         <span> Price: {this.props.item.price} €</span>
//                         <div className="add__to__cart" >
//                             <button onClick={this.props.onAddToCart}>Add to cart</button>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         return false;
//     }
// }
