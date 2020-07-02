import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

class SignUpForm extends Component {
  componentDidMount(){
    let element = document.querySelector("[type='checkbox']");
    if(element){
      element.checked = true
    }
  }
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      name: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/signup',{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        cnfPassword: this.state.confirmpassword
      })
    }).then(res=>res.json()).then(result=>{
      console.log(result.message);
      console.log(this.props)
      this.props.props.history.push('/sign-in');
    }).catch(err=>{
      console.log(err)
    })

  }

  render() {
    const nextVariants = {
      hidden:{
        x:'-100vw'
      },
      visible:{
        x:0,
        transition: { type:'spring', stiffness: 80 }
      },
      exit:{
        x:'100vw',
        transition:{ ease:'easeInOut' }
      }
    };
    return (
      <div>
        <motion.div className="FormCenter"
        variants={ nextVariants }
        initial="hidden"
        animate="visible"
        exit = "exit"
      >
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              required
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password2">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              className="FormField__Input"
              placeholder="Confirm your password"
              name="confirmpassword"
              required
              value={this.state.confirmpassword}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <motion.button className="FormField__Button mr-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
              Sign Up
            </motion.button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </motion.div>
      </div>  
    );
  }
}

export default SignUpForm;
