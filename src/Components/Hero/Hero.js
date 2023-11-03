import "../../index.css";

function Hero() {
  return (
    <>
      <div className="w-full hero flex relative">
        <img
          className=" h-full w-full object-cover z-[-1]"
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
          <p className="text-xl font-semibold px-5 py-2">Date</p>
          <p className="text-xl font-semibold px-5 py-2">Time</p>
          <select className="text-xl font-semibold px-3 py-2 bg-transparent text-slate-100">
            <option>Availibility</option>
            <option>12:00 PM</option>
            <option>12:30 PM</option>
            <option>01:00 PM</option>
            <option>01:30 PM</option>
            <option>02:00 PM</option>
            <option>02:30 PM</option>
            <option>07:00 PM</option>
            <option>07:30 PM</option>
            <option>08:00 PM</option>
            <option>08:30 PM</option>
            <option>09:00 PM</option>
            <option>09:30 PM</option>
            <option>10:00 PM</option>
          </select>
          <button className="text-xl reservebtn rounded-lg font-semibold px-5 py-2 m-2">
            Reserve Table
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
