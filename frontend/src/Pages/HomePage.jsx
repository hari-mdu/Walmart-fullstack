import React from "react";
import Products from "../Components/Products";
import Categories from "../Components/Categories";

// HomePage component
const HomePage = () => {
  return (
    <>
      {/* Grid layout for displaying promotional images */}
      <div className="grid grid-cols-4 gap-5 p-5">
        {/* Individual promotional image with link */}
        <div className=" relative col-span-1 row-span-1">
          {/* Image */}
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-6a1f/k2-_36b8f1d4-15b4-4a13-b65e-bc757439eaff.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70"
            alt=""
            className=" rounded-3xl"
          />
          {/* Overlay text */}
          <div className="absolute top-10 text-white ps-5">
            <h3 className=" font-bold text-xl pb-3">
              Splash zone: pools & <br /> beynd
            </h3>
            <a href="/" className="text-sm underline">
              Shop now
            </a>
          </div>
        </div>
        <div className=" col-span-2 row-span-2 relative">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-97f5/k2-_ea8447d7-3439-4c93-a43f-1c1dbf04ac9e.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"
            alt=""
            className=" rounded-3xl h-full"
          />

          <div className="absolute top-10 text-black ps-5">
            <p className=" text-lg ">Summertime for less</p>
            <h3 className="pb-8 text-5xl font-medium">Get guest-ready</h3>
            <a
              href="/"
              className=" font-semibold rounded-full p-2 bg-white border-2 border-black"
            >
              Shop now
            </a>
          </div>
        </div>
        <div className="col-span-1 row-span-1 relative">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-bbb8/k2-_c261cab1-7e96-4029-9d2c-9205c7939681.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70"
            alt=""
            className=" rounded-3xl h-full"
          />

          <div className="absolute top-10 text-black ps-5">
            <h3 className=" font-bold text-2xl pb-3">
              Cool counter <br /> companions
            </h3>
            <a href="/" className="text-sm underline">
              Shop appliances
            </a>
          </div>
        </div>
        <div className="col-span-1 row-span-3 relative">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-ea7c/k2-_c82ef3c0-8980-4902-8d6c-25e01314efeb.v1.jpg?odnHeight=1156&odnWidth=770&odnBg=&odnDynImageQuality=70"
            alt=""
            className="h-full rounded-3xl"
          />

          <div className="absolute top-10 text-black  ps-5">
            <h3 className=" font-bold text-2xl pb-3">
              Hot days, <br /> hotter new <br /> looks
            </h3>
            <a href="/" className="text-sm underline">
              Shop fashion
            </a>
          </div>
        </div>
        <div className="col-span-1 row-span-1 relative">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-ba79/k2-_602bf805-9b73-4c0d-85df-2550678899e6.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70"
            alt=""
            className=" rounded-3xl"
          />

          <div className="absolute top-10 text-black  ps-5">
            <h3 className=" font-bold text-2xl pb-3">
              Affordable <br /> outdoor lighting
            </h3>
            <a href="/" className="text-sm underline">
              Shop now
            </a>
          </div>
        </div>
        <div className="col-span-1 row-span-2 relative">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-7683/k2-_891bdaf3-bfba-4902-90ff-91ec9c0f03b0.v1.jpg?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70"
            alt=""
            className=" rounded-3xl"
          />

          <div className="absolute top-10 text-black  ps-5">
            <h3 className=" font-bold text-2xl pb-3">
              Guests just wanna have <br /> fun
            </h3>
            <a href="/" className="text-sm underline">
              Shop games
            </a>
          </div>
        </div>
        <div className="col-span-1 row-span-2 relative">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-9443/k2-_10418cf9-c704-4573-9b82-9ba7d0d7a145.v1.jpg?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70"
            alt=""
            className=" rounded-3xl"
          />

          <div className="absolute top-10 text-black  ps-5">
            <h3 className=" font-bold text-2xl pb-3">Save up to 65%</h3>
            <a href="/" className="text-sm underline">
              Shop now
            </a>
          </div>
        </div>
        <div className="col-span-1 row-span-3 relative">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-cbcc/k2-_07e3d723-f56d-4c36-9a1f-b967dd292f8d.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70"
            alt=""
            className="h-full rounded-3xl"
          />

          <div className="absolute top-10 text-black  ps-5">
            <h3 className=" font-bold text-2xl pb-3">Fire up the grill</h3>
            <a href="/" className="text-sm underline">
              Shop now
            </a>
          </div>
        </div>
        <div className=" relative col-span-1 row-span-1">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-4d0d/k2-_b83eed23-54e7-418b-8beb-e8a36d306c39.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70"
            alt=""
            className=" rounded-3xl"
          />

          <div className="absolute top-10 text-white  ps-5">
            <h3 className=" font-bold text-2xl pb-3">Set the table in style</h3>
            <a href="/" className="text-sm underline">
              Shop dining
            </a>
          </div>
        </div>
        <div className=" relative col-span-2 row-span-1">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-21d7/k2-_010ce435-9cfa-4871-98d9-b58993dee070.v1.jpg?odnHeight=216&odnWidth=794&odnBg=&odnDynImageQuality=70"
            alt=""
            className=" rounded-3xl"
          />

          <div className="absolute top-10 text-black  ps-5">
            <h3 className=" font-bold text-2xl pb-3">
              Walmart+ members save big with free <br /> delivery from stores
            </h3>
            <p className=" text-sm pb-2">Terms apply</p>
            <a href="/" className="text-sm underline">
              Join Walmart+
            </a>
          </div>
        </div>
      </div>

      {/* Render the Categories component */}
      <Categories />
      {/* Render the Products component */}
      <Products />
    </>
  );
};

export default HomePage;
