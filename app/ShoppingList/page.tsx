import Image from 'next/image';
import Rating from '../Components/ShoppingList/Rating';
import Pic01 from '@/app/Components/ShoppingList/ShoppingList01.jpg';
import Pic02 from '@/app/Components/ShoppingList/ShoppingList02.jpg';
import Pic03 from '@/app/Components/ShoppingList/ShoppingList03.jpg';
import Pic04 from '@/app/Components/ShoppingList/ShoppingList04.jpg';
import Pic05 from '@/app/Components/ShoppingList/ShoppingList05.jpg';
import Plus from '@/app/Components/ShoppingList/Plus.png';
import Minus from '@/app/Components/ShoppingList/Minus.png';
import BgPic from '../Components/BgPic';
import CheckBox from '@/app/Components/ShoppingList/CheckSquareOffset.png';
import Header from "../Components/Header"


const initialCartItems = [
    { name: "Burger", price: 10.99, quantity: 2, image: Pic01, rating: 3 },
    { name: "Fresh Lime", price: 3.49, quantity: 1, image: Pic02, rating: 3 },
    { name: "Pizza", price: 9.99, quantity: 4, image: Pic03, rating: 3 },
    { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: Pic04, rating: 3 },
    { name: "Cheese Butter", price: 11.99, quantity: 3, image: Pic05, rating: 3 },
];

const ShoppingCart: React.FC = () => {
    return (
        <>
            <Header />
            <div className="bg-white font-sans text-[#333333]">

                <BgPic PageHeading='Shopping Cart' PageName='Shopping cart' />

                <main className="py-12 px-6 md:px-16 lg:px-28">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-left">
                                <th className="p-4 font-semibold">Product</th>
                                <th className="p-4 font-semibold">Price</th>
                                <th className="p-4 font-semibold">Quantity</th>
                                <th className="p-4 font-semibold">Total</th>
                                <th className="p-4 font-semibold">Remove</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#333333]">
                            {initialCartItems.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-4 flex flex-col items-start">
                                        <div className="flex items-start">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded mr-4"
                                                width={93.14}
                                                height={97.13}
                                            />
                                            {/* Star Ratings */}
                                            <div className='flex flex-col'>
                                                <span>{item.name}</span>
                                                <span className="flex mt-2 h-[9px]">
                                                    {Array.from({ length: 5 }, (_, i) => (
                                                        <Rating key={i} filled={i < item.rating} width={20.03} height={20.03} />
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">${item.price.toFixed(2)}</td>
                                    <td className="p-4">
                                        <div
                                            className='border rounded-[18px] px-2 py-1 text-center flex justify-evenly h-[32.04px] max-w-[110.17px]'
                                        >
                                            <button className='text-[#E0E0E0]'>
                                                <Image src={Minus} alt='Minus' />
                                            </button>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                className="w-16 pl-2 text-center"
                                                readOnly
                                            />
                                            <button className='text-[#1F242E]'>
                                                <Image src={Plus} alt='Plus' />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                                    <td className="px-10 cursor-pointer hover:text-[#FF9F0D]">&times;</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10 min-h-[338px] gap-x-5 mb-12">

                        <div className="w-full lg:w-1/2 lg:mb-0 lg:min-h-[185px] h-auto">
                            <h2 className="font-bold text-[32px] leading-10 mb-5">Coupon Code</h2>
                            <div className='border border-[#E0E0E0] rounded-md py-5 px-6'>
                                <p className='text-[#828282] pb-4 pt-2  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Enter here code"
                                        className="flex-grow border rounded-l px-4 py-2"
                                    />
                                    <button
                                        className="bg-[#FF9F0D] text-white px-6 py-2 rounded-r font-semibold"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className=" rounded-md w-full lg:w-1/2 mt-[72px] lg:min-h-[185px] h-auto">
                            <h2 className='font-bold text-[32px] leading-10 mb-5'>Total Bill</h2>
                            <div className="border border-[#BDBDBD] rounded-md">
                                <div className='mx-4'>
                                    <div className="flex justify-between my-4 text-xl font-bold">
                                        <h4>Cart Subtotal</h4>
                                        <p>$120.00</p>
                                    </div>
                                    <div className="flex justify-between mb-4 text-[18px] text-[#4F4F4F]">
                                        <span>Shipping Charges</span>
                                        <p>$00.00</p>
                                    </div>

                                    <hr className=' w-full border-[#E0E0E0] ' />

                                    <div className="flex justify-between font-bold text-xl my-3">
                                        <span>Total Amount</span>
                                        <p>$120.00</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-[#FF9F0D] text-white mt-4 py-3 text-[18px]">
                                Proceed to Checkout <Image src={CheckBox} alt='CheckBox' className='inline' />
                            </button>
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
};

export default ShoppingCart;