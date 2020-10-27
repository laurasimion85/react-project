import React, { Component } from 'react';
import {NavLink, Route, HashRouter, Switch} from 'react-router-dom';
import testitems from "./books";
import testItems from "./books";
import './App.scss';



class BookCard extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className={"books__list"}>
                {this.props.items.map(item => (
                    <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
                ))}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;

    }
}


class Item extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div className="book__container">
                <div className="book__cover">
                    <img src={process.env.PUBLIC_URL + this.props.item.image} alt="book cover"/>
                </div>

                <div className="book__info">
                    <div className="book__title">
                        <h1>{this.props.item.name}</h1>
                        <h3>{this.props.item.author}</h3>
                    </div>
                    <div className="price">
                        <span> Price: {this.props.item.price} €</span>
                        <div className="add__to__cart" >
                            <button onClick={this.props.onAddToCart}>Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
}

class CartPage extends Component {
    constructor(props) {
        super(props);

        this.countItems = this.countItems.bind(this);
        this.totalsum = this.totalsum.bind(this);
    }

    countItems(cart) {
        let cartIds = [];
        let cartIdCount = {};

        for (let i = 0; i < cart.length; i++) {
            if (cartIds.includes(cart[i].id)) {
                cartIdCount[cart[i].id] += 1;

            } else {
                cartIds.push(cart[i].id);
                cartIdCount[cart[i].id] = 1;

            }

        }

        console.log("cartIdCount", cartIdCount);
        console.log("cartIds", cartIds);


        return cartIdCount

    }

    totalsum = (cart) => {
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            total += Number(cart[i].price);
            console.log(total);
            console.log(cart[i].price);
        }
        return total.toFixed(2);

    }


    netCart = (cart) => {

        let cartIds = [];
        let netCart = [];


        for (let i = 0; i < cart.length; i++) {
            if (!(cartIds.includes(cart[i].id))) {
                cartIds.push(cart[i].id);
                netCart.push(cart[i]);

            }
        }
        return (netCart);

    };

    render() {
        let cartIdCounts = this.countItems(this.props.CartItems);
        let netCart = this.netCart(this.props.CartItems);
        let total = this.totalsum(this.props.CartItems);
        return (

            <div className="cart__container">
                <h1>Your Cart</h1>
                {netCart.map((item) => (

                    <CartItem key={item.id} item={item} count={cartIdCounts[item.id]}
                              subtotal={Number(cartIdCounts[item.id] * item.price).toFixed(2)}/>

                ))}

                <div className="total">
                    <p>Order Summary</p>
                    <table>
                        <tbody>
                        <tr>
                            <td>Items ({netCart.length})</td>
                            <td>{total}</td>
                        </tr>
                        <tr>
                            <td>Shipping Standard</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <th>Estimated Total:</th>
                            <th>{total} €</th>
                        </tr>
                        </tbody>
                    </table>
                    <button className="checkout">Proceed to checkout</button>

                </div>

            </div>


        )
    }
}

class CartItem extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <>
                <div className="cartItem__container">
                    <div className="cartItem__cover">
                        <img src={process.env.PUBLIC_URL + this.props.item.image} alt="book cover"/>
                    </div>

                    <div className="cartItem__info">
                        <div className="cartItem__title">
                            <h1>{this.props.item.name}</h1>
                            <h3>{this.props.item.author}</h3>
                        </div>
                        <div className="cartItem__price">
                            <span> {this.props.count} x {this.props.item.price} €</span>
                        </div>
                        <div className="cartItem__price">
                            <span>Subtotal = {this.props.subtotal} €</span>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

// export default CartPage;

class AdvertiseBestsellers extends Component {
    render() {
        return (
            <section className="category__advertise">
                <div className="category__box">
                    <div className="bs__images">
                        <div className="bs__first__img">
                            <img src="/assets/images/24.jpg" alt="book cover"/>
                            <img src="/assets/images/25.png" alt="book cover"/>
                            <img src="/assets/images/26.jpg" alt="book cover"/>
                        </div>
                        <div className="bs__second__img">
                            <img src="/assets/images/27.jpg" alt="book cover"/>
                            <img src="/assets/images/28.jpeg" alt="book cover"/>
                        </div>
                    </div>
                    <div className="bs__text">
                        <div>
                            <h1>
                                <a href="#bestsellers">BESTSELLERS</a>
                            </h1>
                            <div className="bs__subtitle">Meet your next favourite book</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

class AdvertiseChildrenBooks extends Component {
    render() {
        return (
            <section className="category__advertise">
                <div className="category__box children__box">
                    <div>
                        <h1>
                            <a href="#children">CHILDREN'S BOOKS</a></h1>
                    </div>
                </div>
            </section>
        )
    }
}

class BusinessBooks extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <section className="category" id="business">
                <div className="category__title">
                    <h1>BUSINESS</h1>
                </div>
                <div className="category__container">

                    {this.props.items.map((item) => {
                        if (item.category === "business") {
                            return (
                                <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
                    )
                        }
                    })}
                </div>
            </section>
        )
    }
}


class ScienceBooks extends Component {
    render() {
        return (
            <section className="category" id="science">
                <div className="category__title">
                    <h1>SCIENCE</h1>
                </div>
                <div className="category__container">

                    {this.props.items.map((item) => {
                        if (item.category === "science") {
                            return (
                                <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
                            )
                        }
                    })}
                </div>
            </section>
        )
    }
}


class FictionBooks extends Component {
    render() {
        return (
            <section className="category" id="fiction">
                <div className="category__title">
                    <h1>FICTION</h1>
                </div>
                <div className="category__container">

                    {this.props.items.map((item) => {
                        if (item.category === "fiction") {
                            return (
                                <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
                            )
                        }
                    })}
                </div>
            </section>
        )
    }
}

class HobbiesBooks extends Component {
    render() {
        return (
            <section className="category" id="hobbies">
                <div className="category__title">
                    <h1>HOBBIES</h1>
                </div>
                <div className="category__container">

                    {this.props.items.map((item) => {
                        if (item.category === "hobbies") {
                            return (
                                <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
                            )
                        }
                    })}
                </div>
            </section>
        )
    }
}

class BiographyBooks extends Component {
    render() {
        return (
            <section className="category" id="biography">
                <div className="category__title">
                    <h1>BIOGRAPHY</h1>
                </div>
                <div className="category__container">

                    {this.props.items.map((item) => {
                        if (item.category === "biography") {
                            return (
                                <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
                            )
                        }
                    })}
                </div>
            </section>
        )
    }
}

class ChildrenBooks extends Component {
    render() {
        return (
            <section className="category" id="children">
                <div className="category__title">
                    <h1>CHILDREN'S BOOKS</h1>
                </div>
                <div className="category__container">

                    {this.props.items.map((item) => {
                        if (item.category === "children") {
                            return (
                                <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
                            )
                        }
                    })}
                </div>
            </section>
        )
    }
}

class BestsellerBooks extends Component {
    render() {
        return (
            <section className="category" id="bestsellers">
                <div className="category__title">
                    <h1>BESTSELLERS</h1>
                </div>
                <div className="category__container">

                    {this.props.items.map((item) => {
                        if (item.category === "bestsellers") {
                            return (
                                <Item key={item.id} item={item} onAddToCart={() => this.props.onAddToCart(item)}/>
                            )
                        }
                    })}
                </div>
            </section>
        )
    }
}
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return(
            <div className="contact">
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <h1>Contact us</h1>
                    <div className="form">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form message">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit(event) {
    }
}

class Footer extends Component {
    render() {
        return (

                <div className="footer">
                    <div> © 2020 booksonline.com. Registered in England & Wales No: 08134714</div>
                    <div>
                        <i className="fa fa-facebook-official"> </i>
                        <i className="fa fa-tumblr-square"> </i>
                        <i className="fa fa-instagram"> </i>
                    </div>
                </div>
        )
    }
}

class Introduction extends Component {
    render() {
        return (
            <section className={"introduction"}>
                <div className="intro__box">
                    <div className="intro__box__title">
                        <h1>Explore new adventures without leaving the house</h1>
                        <p>Page-turners, plot twists and more</p>
                    </div>
                    <div className="explore__button">
                        <NavLink className="shop__now" to="/bookslist">Shop now</NavLink>
                    </div>
                </div>
            </section>
        )
    }
}


class Menu extends Component {
    render() {

        return (
            <header>
                <section className={"navigation"}>
                    <div className="menu__container">
                        <div className="menu">
                            <a href="#" className="menu-icon">
                                <i className="fa fa-bars"> </i>
                            </a>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li>
                                    <div id="dropdown" to="/bookslist">Books Categories<i
                                        className="fa fa-caret-down"> </i>
                                        <ul id="dropdown-content">
                                            <li><NavLink to="/bestsellers">Bestsellers</NavLink></li>
                                            <li><NavLink to="/business">Business</NavLink></li>
                                            <li><NavLink to="/fiction">Fiction</NavLink></li>
                                            <li><NavLink to="/hobbies">Hobbies</NavLink></li>
                                            <li><NavLink to="/biography">Biography</NavLink></li>
                                            <li><NavLink to="/science">Science</NavLink></li>
                                            <li><NavLink to="/children">Children's books</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className="logo__container">
                            <img className="books__logo" src="/assets/images/books_logo.png" alt={"books logo"}/>
                            <div className="logo__title">
                                <h1>ONLINE BOOKSTORE</h1>
                            </div>
                        </div>
                        <div className="icons">
                            <NavLink to="/search" className="search__btn"><i className="fa fa-search"> </i></NavLink>
                            <div className="cart__icon">
                                <NavLink to="/cart"><i className="fa fa-cart-plus" aria-hidden="true"> </i> </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        )
    }
}

function searchingFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: testitems,
            term: 'title',
        };
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({term: event.target.value})
    };


    render() {
        const {term, items} = this.state;
        return (
            <>
                <div className="search__box">

                    <input className="search__text"
                           type="text"
                           value={term}
                           onChange={this.searchHandler}
                           placeholder="Search Book"/>
                    <i className="fa fa-search"> </i>

                </div>

                {
                    this.state.items.filter(searchingFor(this.state.term)).map((item, index) => {
                            const {id, name, author, image, price} = item;
                            return (
                                // <BookCard items={books} onAddToCart={this.onAddToCart}/>
                                //
                                <div key={id} className="book__container">
                                    <div className="book__cover">
                                        <img src={process.env.PUBLIC_URL + image} alt="book cover"/>
                                    </div>

                                    <div className="book__info">
                                        <div className="book__title">
                                            <h1>{name}</h1>
                                            <h3>{author}</h3>
                                        </div>
                                        <div className="price">
                                            <span> Price: {price} €</span>
                                            <div className="add__to__cart">
                                                <button onClick={this.props.onAddToCart}>Add to cart</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    )
                }


            </>
        )
    }
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: []
        };

        this.onAddToCart = this.onAddToCart.bind(this);
    }

    onAddToCart(item) {
        this.setState({
            cart: [...this.state.cart, item]
        });
        alert("Added to cart")
    }


    render() {
        return (
            <>
                <div className={"container"}>
                    <HashRouter>
                        <Switch>
                            <>

                                <Menu/>

                                <main>
                                    <div className="cart">
                                        <Route exact path='/cart'
                                               render={(props) => <CartPage {...props} CartItems={this.state.cart}/>}/>
                                    </div>
                                    <div className="contact__page">
                                        <Route path='/contact' exact component={Contact}/>
                                    </div>
                                    <div className="search__page">
                                        <Route exact path='/search'
                                               render={(props) => <Search {...props} onAddToCart={this.onAddToCart}/>}/>
                                    </div>

                                    <div className="books__list">

                                        <Route path='/bestsellers'
                                               render={(props) => <BestsellerBooks {...props} items={testItems}
                                                                                   onAddToCart={this.onAddToCart}/>}/>
                                        <Route path='/biography'
                                               render={(props) => <BiographyBooks {...props} items={testItems}
                                                                                  onAddToCart={this.onAddToCart}/>}/>
                                        <Route path='/business'
                                               render={(props) => <BusinessBooks {...props} items={testItems}
                                                                                 onAddToCart={this.onAddToCart}/>}/>
                                        <Route path='/science'
                                               render={(props) => <ScienceBooks {...props} items={testItems}
                                                                                onAddToCart={this.onAddToCart}/>}/>
                                        <Route path='/fiction'
                                               render={(props) => <FictionBooks {...props} items={testItems}
                                                                                onAddToCart={this.onAddToCart}/>}/>
                                        <Route path='/children'
                                               render={(props) => <ChildrenBooks {...props} items={testItems}
                                                                                 onAddToCart={this.onAddToCart}/>}/>
                                        <Route exact path='/hobbies'
                                               render={(props) => <HobbiesBooks {...props} items={testItems}
                                                                                onAddToCart={this.onAddToCart}/>}/>

                                    </div>
                                    <Introduction/>
                                    <div className="books__list">
                                        <Route exact path='/bookslist'
                                               render={(props) => <BookCard {...props} items={testItems}
                                                                            onAddToCart={this.onAddToCart}/>}/>
                                    </div>
                                    <section className="advertise">
                                        <AdvertiseBestsellers/>
                                        <AdvertiseChildrenBooks/>
                                    </section>
                                    <div className="books__list">
                                        <BookCard items={testItems} onAddToCart={this.onAddToCart}/>
                                    </div>

                                </main>

                            </>
                        </Switch>
                    </HashRouter>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Main;
