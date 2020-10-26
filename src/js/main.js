





















//  class Main extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             cart: []
//         };

//         this.onAddToCart = this.onAddToCart.bind(this);
//     }

//     onAddToCart(item) {
//         this.setState({
//             cart: [...this.state.cart, item]
//         });
//         alert("Added to cart")
//     }


//     render() {
//         return (
//             <>
//                 <div className={"container"}>
//                     <HashRouter>
//                         <Switch>
//                             <>

//                                 <Menu/>

//                                 <main>
//                                     <div className="cart">
//                                         <Route exact path='/cart'
//                                                render={(props) => <CartPage {...props} CartItems={this.state.cart}/>}/>
//                                     </div>
//                                     <div className="contact__page">
//                                         <Route path='/contact' exact component={Contact}/>
//                                     </div>
//                                     <div className="search__page">
//                                         <Route exact path='/search'
//                                                render={(props) => <Search {...props} onAddToCart={this.onAddToCart}/>}/>
//                                     </div>

//                                     <div className="books__list">

//                                         <Route path='/bestsellers'
//                                                render={(props) => <BestsellerBooks {...props} items={testItems}
//                                                                                    onAddToCart={this.onAddToCart}/>}/>
//                                         <Route path='/biography'
//                                                render={(props) => <BiographyBooks {...props} items={testItems}
//                                                                                   onAddToCart={this.onAddToCart}/>}/>
//                                         <Route path='/business'
//                                                render={(props) => <BusinessBooks {...props} items={testItems}
//                                                                                  onAddToCart={this.onAddToCart}/>}/>
//                                         <Route path='/science'
//                                                render={(props) => <ScienceBooks {...props} items={testItems}
//                                                                                 onAddToCart={this.onAddToCart}/>}/>
//                                         <Route path='/fiction'
//                                                render={(props) => <FictionBooks {...props} items={testItems}
//                                                                                 onAddToCart={this.onAddToCart}/>}/>
//                                         <Route path='/children'
//                                                render={(props) => <ChildrenBooks {...props} items={testItems}
//                                                                                  onAddToCart={this.onAddToCart}/>}/>
//                                         <Route exact path='/hobbies'
//                                                render={(props) => <HobbiesBooks {...props} items={testItems}
//                                                                                 onAddToCart={this.onAddToCart}/>}/>

//                                     </div>
//                                     <Introduction/>
//                                     <div className="books__list">
//                                         <Route exact path='/bookslist'
//                                                render={(props) => <BookCard {...props} items={testItems}
//                                                                             onAddToCart={this.onAddToCart}/>}/>
//                                     </div>
//                                     <section className="advertise">
//                                         <AdvertiseBestsellers/>
//                                         <AdvertiseChildrenBooks/>
//                                     </section>
//                                     <div className="books__list">
//                                         <BookCard items={testItems} onAddToCart={this.onAddToCart}/>
//                                     </div>

//                                 </main>

//                             </>
//                         </Switch>
//                     </HashRouter>
//                 </div>
//                 <Footer/>
//             </>
//         )
//     }
// }


// ReactDOM.render(
//     <Main/>,
//     document.getElementById('root')
// );