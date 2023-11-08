
function Booking()
{
    return (
        <div className="hero">
      <img
        className="h-full w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-5/6 flex justify-between">
        <p className="text-slate-100 text-xl">DATE
        <p>Calendar</p></p>
        <p className="text-slate-100 text-xl">TIME
        <select className="bg-gray-700 mx-5 p-2 rounded-2xl">
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
        <p className="text-slate-100 text-xl">Number of People</p>
      </div>
    </div>
    )
}
export default Booking;