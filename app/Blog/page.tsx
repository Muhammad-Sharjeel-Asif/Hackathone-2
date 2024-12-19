import React from 'react'
import BgPic from "@/app/Components/BgPic";
import Header from "../Components/Header"
import BlogCard from "../Components/BlogComponent/BlogCard"
import Pagination from '../Components/ShopComponents/Pagination';

import LatestProduct from '../Components/ShopComponents/LatestProduct';
import Slider from '@/app/Components/ShopComponents/Slider';
import Banner from "@/app/Components/ShopComponents/Banner"


const Blog = () => {
  return (
    <>
      <Header />

      <section className="bg-white font-sans text-[#333333]">

        <BgPic PageHeading='Checkout Page' PageName='Checkout' />

        <BlogCard />

        {/* <div className="flex flex-col md:flex-row */}
        <div className="bg-white min-h-screen px-24 py-20 gap-x-8 text-[#333333]">
          {/* Container */}
          <div className="container mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <label className="text-xl">Sort By :</label>
                <select className="border border-[#E0E0E0] min-w-[236px] rounded-md px-3 py-1 text-[#BDBDBD] text-[18px]">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>

                <label className="text-xl">Show :</label>
                <select className="border border-[#E0E0E0] min-w-[236px] rounded-md px-3 py-1 text-[#BDBDBD] text-[18px]">
                  <option>Default</option>
                </select>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex gap-6">
              {/* Products Grid */}
              {/* <div className="w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6">
                {shopProducts.map((product) => (
                  <div
                    key={product.id || product.name}
                    className="overflow-hidden"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={312}
                      height={267}
                      className="object-cover w-full h-48"
                    />
                    <div className="py-2">

                      <h3 className={`text-lg ${product.discount ? "font-bold" : "font-normal"}`}>
                        {product.name}
                      </h3>
                      <p className="text-[#FF9F0D]">
                        ${product.price.toFixed(2)}
                        {product.discount && (
                          <span className="text-[#828282] ml-1 line-through">
                            ${product.discount.toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* Sidebar */}
              <div>
                {/* Categories */}
                <div className="border border-[#F2F2F2] px-9 py-5 mx-auto">
                  <div className='flex'>
                    <input
                      type="text"
                      placeholder="Search Product"
                      className="bg-[#FF9F0D1A] h-[46px] w-[202px] placeholder:pl-6" />
                    {/* <span><Image src={Glass} alt='Glass' className='bg-[#FF9F0D] p-3 h-[46px] w-[46px]' /></span> */}
                  </div>
                  <h4 className="font-bold text-xl my-4">Category</h4>
                  <ul className="space-y-1">
                    <li><input type="checkbox" /> <span>Sandwiches</span></li>
                    <li><input type="checkbox" /> <span>Burger</span></li>
                    <li><input type="checkbox" /> <span>Chicken Chup</span></li>
                    <li><input type="checkbox" /> <span>Drink</span></li>
                    <li><input type="checkbox" /> <span>Pizza</span></li>
                    <li><input type="checkbox" /> <span>Thi</span></li>
                    <li><input type="checkbox" /> <span>Non Veg</span></li>
                    <li><input type="checkbox" /> <span>Uncategorized</span></li>
                  </ul>

                  <Banner />

                  <Slider />

                  <LatestProduct />

                  <h4 className="font-bold text-xl mb-3">Product Tags</h4>
                  <div className="grid grid-cols-3 gap-x-3 gap-y-1 text-[#4F4F4F]">
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Services</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Our Menu</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Pizza</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Cup cake</span>
                    <span className="text-[#FF9F0D] underline decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Burger</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Cookies</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 cursor-pointer">Our Shop</span>
                    <span className="hover:text-[#FF9F0D] underline decoration-[#F2F2F2] hover:decoration-[#FF9F0D] underline-offset-8 col-span-2 cursor-pointer">Tandoori Chicken</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Pagination />

        </div>
      </section >
    </>
  )
}

export default Blog;