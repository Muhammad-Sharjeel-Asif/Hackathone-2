import React from "react";
import Image from "next/image";
import Pic01 from "./Blog01.jpg";
import Pic02 from "./Blog02.jpg";
import Pic03 from "./Blog03.jpg";
import Pic04 from "./Blog04.jpg";
import Arrow from "./ArrowLineUpRight.png"
import Calender from "./Calendar.png"
import Chats from "./Chats.png"
import User from "./UserCirclePlus.png"
import Pagination from "../ShopComponents/Pagination";
import Glass from "@/app/Public/MagnifyingGlass.png"

const BlogPost = [
  { title: "10 Reasons To Do A Digital Detox Challenge", image: Pic01 },
  { title: "Traditional Soft Pretzels with Sweet Beer Cheese", image: Pic02 },
  { title: "The Ultimate Hangover Burger: Egg in a Hole Burger", image: Pic03 },
  { title: "My Favorite Easy Black Pizza Toast Recipe", image: Pic04 }
];

const BlogLayout = () => {
  return (
    <div className="bg-white min-h-screen px-28">
      <div className="container mx-auto pt-20 flex flex-wrap lg:flex-nowrap gap-8">
        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          {BlogPost.map((post, index) => (
            <article key={index} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[520px] object-cover"
                  width={500}
                  height={300}
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-[#FF9F0D] w-[59.93px] h-[60px] text-white rounded-md">
                  <p className="text-center font-bold text-lg pt-1">14</p>
                  <p className="text-center">Feb</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-4">
                {/* Metadata */}
                <div className="flex items-center text-[#4F4F4F] space-x-4">
                  <p className="flex items-center">
                    <span className="mr-1"> <Image src={Calender} alt="Calender" /> </span> Feb 14, 2022 /
                  </p>
                  <p className="flex items-center">
                    <span className="mr-1"> <Image src={Chats} alt="Chats" /> </span> 3 /
                  </p>
                  <p className="flex items-center">
                    <span className="mr-1"><Image src={User} alt="User" /></span> Admin
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="text-2xl font-bold text-[#333333]">
                  {post.title}
                </h2>

                <hr className="border-t border-[#828282] mr-36 my-8" />


                <p className="text-[#4F4F4F]">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, <br /> no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et <br /> dolore magna aliquyam erat
                </p>
                <button
                  className="text-[#FF9F0D] mt-8 flex items-center justify-center border border-[#FF9F0D] rounded-md w-[172px] h-[52px] gap-x-2 mb-8"
                >
                  Read More <Image src={Arrow} alt="Arrow" />
                </button>
              </div>
            </article>
          ))}
        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3">
          {/* Author Bio */}
          <div className='flex border border-[#E0E0E0] w-full justify-between'>
            <input
              type="text"
              placeholder="Search Your Keword.."
              className=" placeholder:pl-6" />
            <span><Image src={Glass} alt='Glass' className='bg-[#FF9F0D] h-[60px] p-5 w-[66px]' /></span>
          </div>




          <div className="bg-white shadow rounded-md p-4 mb-8">
            <Image
              src={Pic02}
              alt="Author profile"
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-center text-gray-800 font-semibold">John Doe</h3>
            <p className="text-center text-gray-600">
              Food enthusiast sharing recipes and tips for healthy eating.
            </p>
          </div>

          {/* Categories */}
          <div className="bg-white shadow rounded-md p-4 mb-8">
            <h4 className="text-gray-800 font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {["Breakfast", "Lunch", "Dinner", "Snacks", "Desserts"].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-orange-500"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white shadow rounded-md">
            <h4 className="text-gray-800 font-semibold mb-4">Recent Posts</h4>
            <ul className="space-y-4">
              {[1, 2, 3].map((post) => (
                <li key={post}>
                  <a href="#" className="flex space-x-4 items-center">
                    <Image
                      src={Pic03}
                      alt="Thumbnail"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="text-gray-700 hover:text-orange-500">
                      Quick and Easy Recipe Title
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="pb-20">
        <Pagination />
      </div>


    </div>
  );
};

export default BlogLayout;
