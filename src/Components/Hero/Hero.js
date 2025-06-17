import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="w-full hero flex relative">
        <img
          className="h-full w-full object-cover z-[-1] fixed top-0"
          src="https://images.unsplash.com/photo-1543007631-283050bb3e8c?auto=format&fit=crop&q=80&w=3174&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />        <div className="flex glassmorphism heromid absolute z-1 w-[90%] md:w-[50%] flex-col rounded-xl align-center text-slate-100">
          <h3 className="restaurant-title text-2xl md:text-5xl md:font-bold pt-5 text-center my-2">
            Let us Serve you better
          </h3>

          <p className="restaurant-subtitle text-md md:text-lg font-semibold py-2 text-center">
            Skip the line and reserve a table with us.
          </p>

          <Link to="/signup">
            <button className="block lg:px-10 lg:py-2 font-semibold text-2xl md:bg-transparent mx-auto reservebtn rounded-lg md:px-5 my-6 restaurant-subtitle">
              Reserve Table
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
