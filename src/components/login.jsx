import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const { email, password } = formData;

    // Validate form fields
    const errors = {};
    if (!email) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!password) {
      errors.password = "Please enter a password.";
    }

    if (Object.keys(errors).length === 0) {
      // Form validation successful, perform actions (e.g., submit data)
      alert(`Form submitted successfully! (This is just a simulation)`); // Replace with actual submission logic
    } else {
      // Set errors state to display error messages
      setErrors(errors);
    }
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleFormSubmit}>
        <h1>Sign In</h1>
        <span>or use your email and password</span>
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <p className="error">{errors.password}</p>}
        <a href="#">Forget Your Password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
