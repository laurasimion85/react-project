// import React, {Component} from 'react';
// import {Item} from "./bookCard";
// import '../scss/_variables.scss';
// import '../scss/main.scss';


// export class AdvertiseBestsellers extends Component {
//     render() {
//         return (
//             <section className="category__advertise">
//                 <div className="category__box">
//                     <div className="bs__images">
//                         <div className="bs__first__img">
//                             <img src="/assets/images/24.jpg"/>
//                             <img src="/assets/images/25.png"/>
//                             <img src="/assets/images/26.jpg"/>
//                         </div>
//                         <div className="bs__second__img">
//                             <img src="/assets/images/27.jpg"/>
//                             <img src="/assets/images/28.jpeg"/>
//                         </div>
//                     </div>
//                     <div className="bs__text">
//                         <div>
//                             <h1>
//                                 <a href="#bestsellers">BESTSELLERS</a>
//                             </h1>
//                             <div className="bs__subtitle">Meet your next favourite book</div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }

// export class AdvertiseChildrenBooks extends Component {
//     render() {
//         return (
//             <section className="category__advertise">
//                 <div className="category__box children__box">
//                     <div>
//                         <h1>
//                             <a href="#children">CHILDREN'S BOOKS</a></h1>
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }

// export class BusinessBooks extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <section className="category" id="business">
//                 <div className="category__title">
//                     <h1>BUSINESS</h1>
//                 </div>
//                 <div className="category__container">

//                     {this.props.items.map((item) => {
//                         if (item.category === "business") {
//                             return (
//                                 <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
//                             )
//                         }
//                     })}
//                 </div>
//             </section>
//         )
//     }
// }


// export class ScienceBooks extends Component {
//     render() {
//         return (
//             <section className="category" id="science">
//                 <div className="category__title">
//                     <h1>SCIENCE</h1>
//                 </div>
//                 <div className="category__container">

//                     {this.props.items.map((item) => {
//                         if (item.category === "science") {
//                             return (
//                                 <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
//                             )
//                         }
//                     })}
//                 </div>
//             </section>
//         )
//     }
// }


// export class FictionBooks extends Component {
//     render() {
//         return (
//             <section className="category" id="fiction">
//                 <div className="category__title">
//                     <h1>FICTION</h1>
//                 </div>
//                 <div className="category__container">

//                     {this.props.items.map((item) => {
//                         if (item.category === "fiction") {
//                             return (
//                                 <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
//                             )
//                         }
//                     })}
//                 </div>
//             </section>
//         )
//     }
// }

// export class HobbiesBooks extends Component {
//     render() {
//         return (
//             <section className="category" id="hobbies">
//                 <div className="category__title">
//                     <h1>HOBBIES</h1>
//                 </div>
//                 <div className="category__container">

//                     {this.props.items.map((item) => {
//                         if (item.category === "hobbies") {
//                             return (
//                                 <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
//                             )
//                         }
//                     })}
//                 </div>
//             </section>
//         )
//     }
// }

// export class BiographyBooks extends Component {
//     render() {
//         return (
//             <section className="category" id="biography">
//                 <div className="category__title">
//                     <h1>BIOGRAPHY</h1>
//                 </div>
//                 <div className="category__container">

//                     {this.props.items.map((item) => {
//                         if (item.category === "biography") {
//                             return (
//                                 <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
//                             )
//                         }
//                     })}
//                 </div>
//             </section>
//         )
//     }
// }

// export class ChildrenBooks extends Component {
//     render() {
//         return (
//             <section className="category" id="children">
//                 <div className="category__title">
//                     <h1>CHILDREN'S BOOKS</h1>
//                 </div>
//                 <div className="category__container">

//                     {this.props.items.map((item) => {
//                         if (item.category === "children") {
//                             return (
//                                 <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
//                             )
//                         }
//                     })}
//                 </div>
//             </section>
//         )
//     }
// }

// export class BestsellerBooks extends Component {
//     render() {
//         return (
//             <section className="category" id="bestsellers">
//                 <div className="category__title">
//                     <h1>BESTSELLERS</h1>
//                 </div>
//                 <div className="category__container">

//                     {this.props.items.map((item) => {
//                         if (item.category === "bestsellers") {
//                             return (
//                                 <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
//                             )
//                         }
//                     })}
//                 </div>
//             </section>
//         )
//     }
// }