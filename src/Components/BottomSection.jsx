import SingleCart from "./SingleCart";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BottomSection = () => {
  const [data, setData] = useState([]);
  const [filtereddd, setFiltereddd] = useState([]);
  const [count, setCoutn] = useState(20);

  useEffect(() => {
    async function fetchApi() {
      const options = {
        method: "GET",
        url: "https://exercisedb.p.rapidapi.com/exercises",
        params: { limit: count },
        headers: {
          "X-RapidAPI-Key":
            "bafc5b11d7mshbb46a86f0edf7f1p1ffab1jsn9593d3ffd531",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        setFiltereddd(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApi();
  }, [count]);

  // i need to add featuer for empy string add all data
  function onchangeHandler(e) {
    console.log(e.target.value);
    let searchName = e.target.value;
    let filterData = [...data];
    let newsetData = filterData.filter((items, idx) => {
      if (items.name.includes(searchName)) {
        return true;
      } 
    })
    setFiltereddd(newsetData);
  }
  return (
    <div>
      <section className="w-screen sm:px-8 px-4 ">
        <div className="w-full pb-4">
          <h1 className="text-3xl font-semibold sm:py-4 py-2">Exercise List</h1>
          <input
            type="text"
            onChange={(e) => onchangeHandler(e)}
            placeholder="Search by target, body,part or Exercises"
            className="w-full px-4 py-2 border-2 border-black rounded-xl"
          />
          <div className="flex flex-wrap gap-1 justify-evenly">
            {filtereddd.map((item, i) => {
              return <SingleCart Data={item} key={i} />;
            })}
          </div>
          <div className="py-8 ">
            <button
              className="px-4 py-2 bg-blue-500 text-white text-2xl rounded-md"
              onClick={() => setCoutn((prev) => prev + 10)}
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BottomSection;
