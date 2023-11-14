import Item from "../Item/Item";
import data from "../Asset/data";

function Reserve() {
  return (
    <div>
      <img
        className="h-full w-full lowbrightness2 object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1504981983529-9ed8031ade7f?q=80&w=2303&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <h1 className="text-5xl font-bold text-center my-6 text-slate-100">
        Select Your Delight!
      </h1>

      <div className="text-slate-100 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 font-bold gap-6 mx-16">
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              rating={item.rating}
              location={item.location}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Reserve;
