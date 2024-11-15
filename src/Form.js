import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'typed.js';

function Form() {
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    gender: '',
    hobbies: [],
  });

  useEffect(() => {
    // Create Typed.js instance when the component mounts
    const typed = new Typed(".text", {
      strings: ["Employee From", "Employee Details", "Employee Data"],
      typeSpeed: 10,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      onStringTyped: (arrayPos, self) => {
        const typedElement = self.el;
        typedElement.style.color = arrayPos % 2 === 0 ? 'green' : 'blue';  }
    });

    // Clean up the Type
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Handle form input changes (text, checkboxes, radio buttons)
  function handleChanges(e) {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // Handle checkbox inputs for hobbies
      setInputData((prevData) => {
        let updatedHobbies = [...prevData.hobbies];
        if (checked) {
          updatedHobbies.push(value);
        } else {
          updatedHobbies = updatedHobbies.filter((hobby) => hobby !== value);
        }
        return { ...prevData, hobbies: updatedHobbies };
      });
    } else if (type === 'radio') {
      // Handle radio inputs for gender
      setInputData((prevData) => ({
        ...prevData,
        gender: value,
      }));
    } else {
      // Handle text inputs for name, email, password, and mobile
      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData); // Log the form data upon submit
  };

  return (
    <div className="container mt-5 ">
      <h1 className="home-content mb-4">
        Registration Form <span className="text"></span>
      </h1>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        {/* Name Input */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handleChanges}
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            name="email"
            value={inputData.email}
            onChange={handleChanges}
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleChanges}
            required
          />
        </div>

        {/* Mobile Input */}
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Your Mobile No"
            name="mobile"
            value={inputData.mobile}
            onChange={handleChanges}
            required
          />
        </div>

        {/* Hobbies Checkboxes */}
        <div className="mb-3">
          <label className="form-label">Hobbies:</label><br />
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              name="hobbies"
              value="Singing"
              checked={inputData.hobbies.includes('Singing')}
              onChange={handleChanges}
            />
            <label className="form-check-label">Singing</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              name="hobbies"
              value="Badminton"
              checked={inputData.hobbies.includes('Badminton')}
              onChange={handleChanges}
            />
            <label className="form-check-label">Badminton</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              name="hobbies"
              value="Cooking"
              checked={inputData.hobbies.includes('Cooking')}
              onChange={handleChanges}
            />
            <label className="form-check-label">Cooking</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              name="hobbies"
              value="Reading Books"
              checked={inputData.hobbies.includes('Reading Books')}
              onChange={handleChanges}
            />
            <label className="form-check-label">Reading Books</label>
          </div>
        </div>

        {/* Gender Radio Buttons */}
        <div className="mb-3">
          <label className="form-label">Gender:</label><br />
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="male"
              checked={inputData.gender === 'male'}
              onChange={handleChanges}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="female"
              checked={inputData.gender === 'female'}
              onChange={handleChanges}
            />
            <label className="form-check-label">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="other"
              checked={inputData.gender === 'other'}
              onChange={handleChanges}
            />
            <label className="form-check-label">Other</label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
