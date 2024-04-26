import React from "react";

function Card({ channel, btnText, image , title}) {
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md inline-block mx-10 -mt-8 mt-5">
        <img
          src={image}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{channel}</h1>
          <p className="mt-2 text-sm text-gray-300">
            {title}
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
