import Item from '../Item/Item'
import data from '../Asset/data'

function Reserve() {
  return (
    <div className="hero">
      {/* <img
        className="h-full w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      /> */}
      {/* <img
        className="h-full w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      /> */}
      <img
        className="h-full w-full object-cover z-[-1] fixed top-0"
        src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className='new-collection flex justify-center flex-col'>
      <h1 className='text-3xl text-slate-100'>Select Your Delight!</h1>
    
      <div className="text-slate-100 grid grid-cols-3 py-10 font-bold">
      {data.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.image} description={item.description} rating={item.rating} location={item.location}/>
      })}
      </div>
    </div>
    </div>
  );
}
export default Reserve;
