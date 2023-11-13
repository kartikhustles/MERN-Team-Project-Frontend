import Login from "../Login/Login";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [arr, setArr] = useState([]);

  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email: arr[0], password: arr[1] };
    axios
      .post("http://localhost:4000/people/create-people", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Record added successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Login getState={getState} emailValue="" passwordValue="" />
    </form>
  );
}

export default Signup;
