import BgPic from '../Components/BgPic';
import Image from "next/image";
import Glass from "@/app/Public/MagnifyingGlass.png"
import Pic01 from "@/app/Components/AboutUs/AboutUsPic02.jpg"
import Pic02 from "@/app/Components/ShopComponents/Shop02.jpg"
import Pic03 from "@/app/Components/Menu_Component/Menu02.jpg"
import Pic04 from "@/app/Components/ShopComponents/Shop04.jpg"
import Pic05 from "@/app/Components/Menu_Component/Menu04.jpg"
import Pic06 from "@/app/Components/ShopComponents/Shop06.jpg"
import Pic07 from "@/app/Components/ShopComponents/Shop07.jpg"
import Pic08 from "@/app/Components/ShopComponents/Shop08.jpg"
import Pic09 from "@/app/Components/ShopComponents/Shop09.jpg"

const shopProducts = [
    { id: 1, name: "Fresh Lime", price: 38, image: Pic01, discount: 45 },
    { id: 2, name: "Chocolate Muffin", price: 28, image: Pic02 },
    { id: 3, name: "Burger", price: 21, image: Pic03, discount: 45 },
    { id: 4, name: "Country Burger", price: 45, image: Pic04 },
    { id: 5, name: "Drink", price: 23, image: Pic05, discount: 45 },
    { id: 6, name: "Pizza", price: 43, image: Pic06 },
    { id: 7, name: "Cheese Butter", price: 10, image: Pic07 },
    { id: 8, name: "Sandwich", price: 25, image: Pic08 },
    { id: 9, name: "Chicken Chup", price: 12, image: Pic09 },
    { id: 10, name: "Country Burger", price: 45, image: Pic04 },
    { id: 11, name: "Drink", price: 23, image: Pic05, discount: 45 },
    { id: 12, name: "Pizza", price: 43, image: Pic06 },
    { id: 13, name: "Cheese Butter", price: 10, image: Pic07 },
    { id: 14, name: "Sandwich", price: 25, image: Pic08 },
    { id: 15, name: "Chicken Chup", price: 12, image: Pic09 },
];

export default function Home() {
    return (
        <section className="bg-white font-sans text-[#333333]">

            <BgPic PageHeading='Checkout Page' PageName='Checkout' />

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
                        <div className="w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6">
                            {shopProducts.map((product) => (
                                <div
                                    key={product.id || product.name} // Use a unique identifier
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
                                        {/* Name is bold only if discount is present */}
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
                        </div>

                        {/* Sidebar */}
                        <div className="w-1/3 space-y-6">
                            {/* Categories */}
                            <div className="border border-gray-200 rounded-lg p-4">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border border-gray-300 rounded px-3 py-1"/>
                                    <span className='w-[46px] h-[46px]'><Image src={Glass} alt='Glass' width={20} height={20} className='bg-[#FF9F0D]' /></span>
                                <h4 className="font-bold text-lg mb-3">Category</h4>
                                <ul className="space-y-2">
                                    <li><input type="checkbox" /> <span>Pizza</span></li>
                                    <li><input type="checkbox" /> <span>Burger</span></li>
                                    <li><input type="checkbox" /> <span>Sandwich</span></li>
                                </ul>
                            </div>

                            {/* Filter by Price */}
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h4 className="font-bold text-lg mb-3">Filter by Price</h4>
                                <input type="range" className="w-full" />
                                <div className="flex justify-between text-gray-500 text-sm">
                                    <span>$0</span>
                                    <span>$100</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-8">
                        <button className="px-4 py-2 border border-gray-300">1</button>
                        <button className="px-4 py-2 border border-gray-300 bg-gray-200">
                            2
                        </button>
                        <button className="px-4 py-2 border border-gray-300">3</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
