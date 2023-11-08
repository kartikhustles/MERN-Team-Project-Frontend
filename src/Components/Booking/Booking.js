

function Booking() {
  return (
    <div className="hero">
      <img
        className="h-full w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full glassmorphism rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="w-3/4 flex flex-col ">
          <p className="text-xl font-bold leading-tight tracking-tight  md:text-2x text-white">DATE
            <p></p></p>
          <p className="text-xl font-bold leading-tight tracking-tight  md:text-2x text-white">TIME
            <select className="bg-gray-700 mx-5 p-2 rounded-2xl  hover:bg-gray-800">
              <option>12:00 PM</option>
              <option>12:30 PM</option>
              <option>01:00 PM</option>
              <option>01:30 PM</option>
              <option>02:00 PM</option>
              <option>02:30 PM</option>
              <option>07:30 PM</option>
              <option>08:00 PM</option>
              <option>08:30 PM</option>
            </select>
          </p>
          <p className="text-xl font-bold leading-tight tracking-tight  md:text-2x text-white">Number of People
            <select className="bg-gray-700 mx-5 p-2 rounded-2xl  hover:bg-gray-800">
              <option>2</option>
              <option>4</option>
              <option>6</option>
              <option>8</option>
            </select>
          </p>
          <button   type="submit"
              className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reserve</button>
        </div>
      </div>
    </div>
  )
}
export default Booking;