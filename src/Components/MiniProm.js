import React from "react";
import Marquee from "react-fast-marquee";

const MiniPromotion = () => {
  return (
    <div className="h-28 bg-white rounded mx-24 my-16 relative">
      <Marquee gradient={false} speed={20}>
        <p className="text-gray-100 shadow-sm text-8xl font-bold z-0 uppercase overflow-hidden">
          Download our app Download our app Download our app Download our app Download our app Download our app Download our app Download our app Download our app Download our app Download our app Download our app Download our app Download our app
        </p>
      </Marquee>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-x-5 justify-center z-50">
        <h4 className="text-slate-600 text-sm font-bold uppercase">EXCLUSIVE SALES, GET IT NOW!</h4>
        <div className="flex items-center space-x-4">
          <p className="text-black italic text-3xl font-bold uppercase">Download our app</p>
          <button className="bg-slate-900 hover:bg-slate-600 text-white text-sm px-4 py-2 rounded-md font-medium uppercase">
            Get Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniPromotion;

