import React from "react";

const Topsection = () => {
  return (
    <div>
      <section className="w-screen sm:px-8 sm:py-24 px-4 py-12">
        <div className="sm:flex block gap-12 py-4">
          <h1 className="text-3xl font-semibold max-w-md">
            Where Fitness Meets Fun and Results Are Achieved
          </h1>
          <p>
            Include an inspiring image or video that showcases your gym's
            energetic atmosphere, trainers, or members working out.
          </p>
        </div>
        <div className=" sm:flex block gap-2 py-16"> 
          <div className="sm:w-1/2  w-full py-2" >
            <div className="w-full flex gap-2 ">
              <div className="w-1/2">
                <img
                  src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="w-1/2">
                <img
                  src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
              </div>
            </div>
            <div className="full mt-2">
              <img
                src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-1/2  w-full  ">
            <div className="w-full mb-2">
              <img src="https://wallpaperaccess.com/full/1087621.jpg" alt="" />
            </div>
            <div className="full flex gap-2">
              <div className="w-1/2">
                <img src="https://wallpapercave.com/wp/wp6331008.jpg" alt="" />
              </div>
              <div className="w-1/2">
                <img
                  src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topsection;
