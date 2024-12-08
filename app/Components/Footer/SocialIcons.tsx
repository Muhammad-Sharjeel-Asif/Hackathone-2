import React from 'react'
import Image from 'next/image'
// import Facebook from "@/app/Components/Footer/Rectangle 8790.png"
import Facebook from "@/app/Components/Footer/facebook.png"

const SocialIcons = () => {
  return (
    <div className='bg-[#FFFFFF] h-[33px] w-[35.85px] rounded-sm'>
        <Image src={Facebook} alt='Facebook' height={10} width={18} className='text-[#1E1E1E] leading-[18.4px] my-[8.25px] mx-[11.95px]'></Image>
    </div>
  )
}

export default SocialIcons