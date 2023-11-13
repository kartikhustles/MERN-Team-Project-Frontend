import { useState } from "react";
import { toast } from "react-toastify";

function Login(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPasswword] = useState("");

  // const arr = [email, password];

  // const handleClick = () => {
  //   props.getState(arr);
  // };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function ChangeHandler(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("printing the form values");
    console.log(formData);
    toast.success("Logged-in Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <img
        className="h-full w-full lowbrightness object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1516953951091-5051d8bebb74?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full glassmorphism rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="flex flex-col p-6 sm:p-8">
          <h1 className="text-3xl font-bold mx-auto leading-tight tracking-tight md:text-2x text-white">
            Create Account
          </h1>
          <form className="mt-6" onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-md font-medium text-white "
              >
                Your email
              </label>
              <input
                // defaultValue={props.emailValue}
                // onChange={(event) => setEmail(event.target.value)}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                // className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                className="border text-base font-semibold rounded-lg block w-full p-2.5 forminput"
                placeholder="name@mail.com"
                required
                onChange={ChangeHandler}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block mb-2 text-md font-medium text-white"
              >
                Password
              </label>
              <input
                // defaultValue={props.passwordValue}
                // onChange={(event) => setPasswword(event.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={formData.password}
                // className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                className="border text-base font-semibold rounded-lg block w-full p-2.5 forminput"
                required
                onChange={ChangeHandler}
              />
            </div>

            {/* <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the Terms and Conditions
                </label>
              </div>
            </div> */}

            <button
              // onClick={handleClick}
              type="submit"
              className="reservebtn text-lg text-white font-medium rounded-lg px-5 py-2.5 mt-6 ml-12"
            >
              Create Account
            </button>
            {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
