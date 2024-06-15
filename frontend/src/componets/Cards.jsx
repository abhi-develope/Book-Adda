import React from "react";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="my-6 ">
        <div className="border card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={item.image}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="mt-2 card-actions justify-end">
              <div className="badge badge-outline bg-blue-700 text-white p-3">${item.price}</div>
              <div className="badge badge-outline bg-red-500 text-white p-3">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
