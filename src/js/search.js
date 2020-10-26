// import React, {Component} from 'react';
// import testitems from "../Database/books";
// import '../scss/_variables.scss';
// import '../scss/main.scss';


// function searchingFor(term) {
//     return function (x) {
//         return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
//     }
// }

// export class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: testitems,
//             term: 'title',
//         };
//         this.searchHandler = this.searchHandler.bind(this);
//     }

//     searchHandler(event) {
//         this.setState({term: event.target.value})
//     };


//     render() {
//         const {term, items} = this.state;
//         return (
//             <>
//                 <div className="search__box">

//                     <input className="search__text"
//                            type="text"
//                            value={term}
//                            onChange={this.searchHandler}
//                            placeholder="Search Book"/>
//                     <i className="fa fa-search"> </i>

//                 </div>

//                 {
//                     this.state.items.filter(searchingFor(this.state.term)).map((item, index) => {
//                             const {id, name, author, image, price} = item;
//                             return (
//                                 // <BookCard items={books} onAddToCart={this.onAddToCart}/>
//                                 //
//                                 <div key={id} className="book__container">
//                                     <div className="book__cover">
//                                         <img src={image}/>
//                                     </div>

//                                     <div className="book__info">
//                                         <div className="book__title">
//                                             <h1>{name}</h1>
//                                             <h3>{author}</h3>
//                                         </div>
//                                         <div className="price">
//                                             <span> Price: {price} €</span>
//                                             <div className="add__to__cart">
//                                                 <button onClick={this.props.onAddToCart}>Add to cart</button>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>

//                             )
//                         }

                        

