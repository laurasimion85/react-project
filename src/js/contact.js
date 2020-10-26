// import React, {Component} from 'react';
// import '../scss/_variables.scss';
// import '../scss/main.scss';

// export class Contact extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             message: ''
//         }
//     }

//     render() {
//         return(
//             <div className="contact">
//                 <form onSubmit={this.handleSubmit.bind(this)} method="POST">
//                     <h1>Contact us</h1>
//                     <div className="form">
//                         <label htmlFor="name">Name</label>
//                         <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//                     </div>
//                     <div className="form">
//                         <label htmlFor="exampleInputEmail1">Email address</label>
//                         <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//                     </div>
//                     <div className="form message">
//                         <label htmlFor="message">Message</label>
//                         <textarea className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         );
//     }

//     onNameChange(event) {
//         this.setState({name: event.target.value})
//     }

//     onEmailChange(event) {
//         this.setState({email: event.target.value})
//     }

//     onMessageChange(event) {
//         this.setState({message: event.target.value})
//     }

//     handleSubmit(event) {
//     }
// }

