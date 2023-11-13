import React from "react";

import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg glassmorphism my-8 cursor-pointer">
        <Link to="/booking">
          <img
            className="h-[200px] w-[2001px] object-cover"
            src={props.image}
            alt="Sunset in the mountains"
          />
        </Link>
        <div className="px-6 py-4">
          <div className="flex justify-between">
            <div className="font-thin text-xl mb-2 text-slate-100">
              {props.name}
            </div>
            <div className="font-thin text-sm mb-2 text-slate-100">
              {props.price}
            </div>
          </div>
          <p className="text-md font-light text-slate-100">
            {props.description}
          </p>
        </div>
        <div className="px-6 pt-2 pb-2 flex justify-between">
          <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
            {props.rating}
          </span>
          <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2">
            {props.location}
          </span>
        </div>
      </div>
      {/* <div classNameName='w-3/4'>
      <Link t={`/product/${props.id}`}><img src={props.image} alt=''/></Link>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <p>{props.rating}</p>
    </div> */}
    </>
  );
};

export default Item;
