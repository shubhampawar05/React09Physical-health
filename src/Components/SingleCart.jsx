import React, { useEffect, useState } from "react";

const SingleCart = ({ Data }) => {
    console.log(Data);
  return (
    <>
      <div className="xl:w-[450px] xl:h-[580px] sm:w-[350px] sm:[480px] w-[350px] h-[380px] shadow-xl px-2 rounded-lg m-1">
        <div className="w-full h-[78%] pt-2">
          <img className="w-full h-[100%]  rounded-lg pt-2" src={Data.gifUrl} alt="" />
        </div>
        <div className="w-full px-4 sm:py-2">
          <h1 className="capitalize sm:text-2xl text-sm font-semibold text-cyan-900    ">{Data.name}</h1>
          <p className=" text-sm sm:uppercase text-slate-400 sm:py-1">{Data.target}</p>
          <p className=" text-sm sm:uppercase text-slate-400">{Data.bodyPart}</p>
        </div>
      </div>
    </>
  );
};

export default SingleCart;
