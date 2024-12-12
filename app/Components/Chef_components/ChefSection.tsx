import React from "react";
import Image from "next/image";
import Chef1 from "./Chef01.png";
import Chef2 from "./Chef02.jpg";
import Chef3 from "./Chef03.jpg";
import Chef4 from "./Chef04.jpg";
import Chef5 from "./Chef05.jpg";
import Chef6 from "./Chef06.jpg";
import Chef7 from "./Chef07.jpg";
import Chef8 from "./Chef08.jpg";
import Chef9 from "./Chef09.jpg";
import Chef10 from "./Chef10.jpg";
import Chef11 from "./Chef11.jpg";
import Chef12 from "./Chef12.jpg";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: Chef1 },
  { name: "Jorina Begum", role: "Chef", image: Chef2 },
  { name: "M. Mohammad", role: "Chef", image: Chef3 },
  { name: "Munna Kathy", role: "Chef", image: Chef4 },
  { name: "Tahmina Rumi", role: "Cook", image: Chef5 },
  { name: "Bisnu Devgon", role: "Chef", image: Chef6 },
  { name: "Motin Molladst", role: "Chef", image: Chef7 },
  { name: "William Rumi", role: "Chef", image: Chef8 },
  { name: "Kets William Roy", role: "Chef", image: Chef9 },
  { name: "Mahmud Kholil", role: "Chef", image: Chef10 },
  { name: "Ataur Rahman", role: "Chef", image: Chef11 },
  { name: "Monalisa Holly", role: "Chef", image: Chef12 },
];

const ChefSection = () => {
  return (
    <div className="container px-16 pb-16 mt-20 mx-auto">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`  rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${index === 6
                ? "border-gray-200"
                : "border-4 border-transparent hover:border-gray-200"
              }`}
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                // width={312}
                // height={379.17}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;