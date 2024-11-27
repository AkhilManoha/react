import { useState } from "react";

function Test1() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  // Destructure the state
  const { username, password } = data;

  // Handle input changes
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value, // Correctly update the state
    });
  };

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Enter the Username:
          <br />
          <input
            type="text"
            name="username" // Add name attribute for proper state mapping
            placeholder="Username"
            value={username}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Enter the Password:
          <br />
          <input
            type="password"
            name="password" // Add name attribute for proper state mapping
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Test1;
