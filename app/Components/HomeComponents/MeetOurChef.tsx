import Image from "next/image";
import Pic01 from "./HomeChef01.jpg"
import Pic02 from "./HomeChef02.jpg"
import Pic03 from "./HomeChef03.jpg"
import Pic04 from "./HomeChef04.jpg"


const MeetOurChef = () => {
  const chefs = [
    {
      name: "D. Estwood",
      role: "Chef Chef",
      image: Pic01
    },
    {
      name: "D. Scoriech",
      role: "Assistant Chef",
      image: Pic02
    },
    {
      name: "M. William",
      role: "Advertising Chef",
      image: Pic03
    },
    {
      name: "W. Readfroad",
      role: "Chef",
      image: Pic04
    },
  ];

  return (
    <section className="mx-28 text-white pb-12 px-6">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <p className="italic text-[#FF9F0D] text-[32px] mb-2">Chefs</p>
        <h2 className="text-5xl font-bold mb-8">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h2>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="relative overflow-hidden"
            >
              {/* Chef Image */}
              <Image
                src={chef.image}
                alt={chef.name}
                className="w-full h-[391px] object-cover rounded-md"
              />

              {/* Overlay for Name and Role */}
              <div className="absolute bottom-0 left-0 w-[181px] h-[67px] bg-gradient-to-t bg-white to-transparent text-[#333333] py-2 px-4 rounded-bl-md">
                <h3 className="text-left text-lg font-bold leading-tight">{chef.name}</h3>
                <p className="text-left text-sm">{chef.role}</p>
              </div>

            </div>
          ))}
        </div>


        {/* See More Button */}
        <div className="mt-12">
          <button className="bg-transparent border border-[#FF9F0D] text-white py-2 px-4 rounded-full w-[155px] h-[50px]">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetOurChef;
