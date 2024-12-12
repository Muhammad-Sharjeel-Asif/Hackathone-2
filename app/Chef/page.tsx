import ChefSection from "../Components/Chef_components/ChefSection";
import BgPic from "@/app/Components/BgPic";


const Chef = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">

      <BgPic PageHeading='Our Chef' PageName='Chef' />
 
      < ChefSection />
    </div>
  );
};

export default Chef;