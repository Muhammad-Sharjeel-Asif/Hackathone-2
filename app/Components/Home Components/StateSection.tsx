import StatsBg from "@/app/Components/Home Components/Home02.jpg"

// import { UserGroupIcon, CakeIcon, StarIcon, EmojiHappyIcon } from '@heroicons/react/solid';
// import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';


export default function StatsSection() {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${StatsBg.src})`,
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
            }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative z-10 py-16 text-center text-white">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Single Stat */}
                    <div>
                        {/* <UserGroupIcon className="h-12 w-12 text-orange-400 mb-2" /> */}
                        <h3 className="text-4xl font-bold">420</h3>
                        <p className="mt-2 text-lg">Professional Chefs</p>
                    </div>

                    <div>
                        {/* <CakeIcon className="h-12 w-12 text-orange-400 mb-2" /> */}
                        <h3 className="text-4xl font-bold">320</h3>
                        <p className="mt-2 text-lg">Items Of Food</p>
                    </div>

                    <div>
                        {/* <StarIcon className="h-12 w-12 text-orange-400 mb-2" /> */}
                        <h3 className="text-4xl font-bold">30+</h3>
                        <p className="mt-2 text-lg">Years Of Experienced</p>
                    </div>

                    <div>
                        {/* <EmojiHappyIcon className="h-12 w-12 text-orange-400 mb-2" /> */}
                        <h3 className="text-4xl font-bold">220</h3>
                        <p className="mt-2 text-lg">Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}




// style={{
//     backgroundImage: `url(${StatsBg.src})`,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)'
// }}