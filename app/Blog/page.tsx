import React from 'react'
import BgPic from "@/app/Components/BgPic";
import Header from "../Components/Header"
import BlogCard from "../Components/BlogComponent/BlogCard"
import Pagination from '../Components/ShopComponents/Pagination';

const Blog = () => {
  return (
    <>
      <Header />

      <BgPic PageHeading='Blog List' PageName='Blog' />

      <BlogCard />

    </>
  )
}

export default Blog;