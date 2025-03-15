import React, { useState } from 'react';

export function App(props) {
  const [inputs, setInputs] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); // Mark form as submitted
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>

        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>

        <input type="submit" />
      </form>

      {submitted && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {inputs.username}</p>
          <p>Age: {inputs.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
