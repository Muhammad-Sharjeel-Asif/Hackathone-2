import React from 'react'
import HeroSection from './Components/HomeComponents/HeroSection'
import FoodCategory from './Components/HomeComponents/FoodCategory'
import AboutSection from './Components/HomeComponents/AboutSection'
import Testimonial from './Components/HomeComponents/Testimonial'
import MeetOurChef from './Components/HomeComponents/MeetOurChef'
import BlogSection from './Components/HomeComponents/BlogSection'
import StatsSection from './Components/HomeComponents/StatsSection'
import MenuSection from './Components/HomeComponents/MenuSection'
import WhyChooseUs from "./Components/HomeComponents/WhyChooseUs"

function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <FoodCategory />
      <WhyChooseUs />
      <StatsSection />
      <MenuSection />
      <MeetOurChef />
      <Testimonial />
      <BlogSection />
    </div>
  )
}

export default page