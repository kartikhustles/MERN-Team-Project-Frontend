function About() {
  return (
    <div className="w-full hero flex relative">
      <img
        className=" h-full w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1449038319053-cc4a78b12733?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRpbmV8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <div className="absolute z-1 text-white m-8">
        <p className=" text-lg font-bold">
          <span className=" text-4xl font-extrabold">Welcome to Dine</span>,
          your go-to destination for a seamless dining experience! Whether
          you're a food enthusiast looking to explore new culinary horizons or
          simply planning a special night out, we've got you covered. At Dine,
          we bring the best of the restaurant world to your fingertips.
          Discover, reserve, and relish the flavors of your favorite cuisines
          with just a few clicks. Our user-friendly platform makes it effortless
          to find and book tables at top-rated restaurants in your area.
        </p>
        <p className=" text-lg font-bold my-4">
          <span className="text-4xl font-extrabold ">Key Features</span>
          <ol>
            <li className="my-2">
              <span className="text-2xl font-bold">
                Extensive Restaurant Selection
              </span>
              :- Browse through a diverse range of restaurants, from cozy local
              gems to upscale dining establishments.
            </li>
            <li className="my-2">
              <span className=" text-2xl font-bold">
                Personalized Recommendations
              </span>
              :- Receive tailored suggestions based on your location,
              preferences, and dining history.
            </li>
            <li className="my-2">
              <span className=" text-2xl font-bold">Easy Booking</span>
              :- Secure your spot with ease by choosing your preferred date,
              time, and party size. Make instant reservations and receive
              confirmation right away.
            </li>
            <li className="my-2">
              <span className=" text-2xl font-bold">Explore Menus</span>
              :- Peek into each restaurant's offerings with detailed menus,
              including descriptions, prices, and dietary information.
            </li>
            <li className="my-2">
              <span className=" text-2xl font-bold">User Reviews</span>
              :- Gain insights from fellow diners through honest and informative
              reviews and ratings.
            </li>
            <li className="my-2">
              <span className=" text-2xl font-bold">Exclusive Promotions</span>
              :- Keep an eye out for special deals, promotions, and loyalty
              rewards to make your dining experience even more delightful.
            </li>
            <li className="my-2">
              <span className=" text-2xl font-bold">User Accounts</span>
              :- Create your account for a personalized experience, including
              booking history and user profiles.
            </li>
            <li className="my-2">
              <span className=" text-2xl font-bold">Secure Payments</span>
              :- Enjoy peace of mind with our secure payment system for online
              reservations.
            </li>
            <li className="my-2">
              <span className=" text-2xl font-bold">Mobile-Friendly</span>
              :- Access our platform on-the-go with our mobile-responsive
              design. Dine is more than just a restaurant reservation platform;
              it's your passport to unforgettable dining experiences. Whether
              you're planning a romantic dinner for two, a family celebration,
              or a casual outing with friends, we're here to help you savor
              every moment. Discover and create memories with Dine. Your next
              culinary adventure awaits!
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
}
export default About;
