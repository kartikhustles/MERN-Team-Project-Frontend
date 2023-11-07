import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="w-full hero flex relative">
        <img
          className="h-full w-full object-cover z-[-1]"
          src="https://images.unsplash.com/photo-1543007631-283050bb3e8c?auto=format&fit=crop&q=80&w=3174&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="flex glassmorphism heromid absolute z-1 w-[50%] flex-col rounded-xl  align-center text-slate-100">
          <h3 className="text-5xl font-bold pt-5 text-center">
            Let us Serve you better
          </h3>
          <p className="text-lg font-semibold py-2 text-center">
            Don’t wait in a line to enjoy your meal. Reserve a table in advance
            with us.
          </p>

          <button className="mx-auto text-xl reservebtn rounded-lg font-semibold px-5 py-2 m-2">
            <Link
              to="/reserve"
              className="block py-2 pl-3 pr-4 font-semibold text-xl rounded md:bg-transparent"
            >
              Reserve Table
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
