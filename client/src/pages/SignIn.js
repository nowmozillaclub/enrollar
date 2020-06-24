import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
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

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    const nextVariants = {
      hidden: {
        x: '-100vw'
      },
      visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 80 }
      },
      exit: {
        x: '100vw',
        transition: { ease: 'easeInOut' }
      }
    }
    return (
      <motion.div className="FormCenter"
        variants={nextVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
        >
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
              required
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <motion.button className="FormField__Button mr-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Sign In
            </motion.button>{" "}
            <Link to="/sign-up" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </motion.div>
    );
  }
}

export default SignInForm;
