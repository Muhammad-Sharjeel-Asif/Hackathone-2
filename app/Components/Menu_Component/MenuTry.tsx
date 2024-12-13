import React from 'react'
import Image from 'next/image';
import { menuItem } from '@/app/Constant/StarterMenu';
import Pic01 from './Menu01.jpg'
import { Coffee } from 'lucide-react';


interface MenuItem {
    name: string
    description: string
    calories: number
    price: number
  }

interface MenuTryProps {
    heading: string;
    Img: string; // Path or URL of the image
    arr: enuItem[];
  }

const MenuTry: React.FC<MenuTryProps> = ( { heading, Img, arr }:any ) => {
  return (
<section className="w-full mx-auto sm:px-6 py-12 px-6 md:px-16 lg:px-28">

<div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
    {/* Image Section */}
    <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
        <Image
            src={Img}
            alt="Starter dish"
            width={448}
            height={626}
            className="w-full h-auto max-w-full shadow-lg"
        />
    </div>
    {/* Menu Content */}
    <div className="w-full lg:w-1/2 lg:pl-8">
        <div className="flex flex-col mb-8">
            <Coffee className="ml-2 text-[rgb(255,159,13)]" size={24} />
            <div>
                <h3 className='text-[48px] leading-[56px] font-bold'>{ heading }</h3>
            </div>
        </div>
        <div className="space-y-8">
            {arr.map((item, index) => (
                <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                            {item.name}
                        </h3>
                        <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                    </div>
                    <p className="text-gray-600 mb-[6px]">{item.description}</p>
                    <p className="text-sm sm:text-[16px] text-[#4F4F4F]">{item.calories} CAL</p>
                </div>
            ))}
        </div>
    </div>
</div>
</section>  )
}

export default MenuTry;