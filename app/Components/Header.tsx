import Link from "next/link";
import Image from "next/image";
import Search from '@/app/Public/MagnifyingGlass.png'
import User from '@/app/Public/User.png'
import Premium from '@/app/Public/Tote.png'

export default function Header() {
    return (
        <header className="h-[90px] flex-wrap flex items-center">  {/* w-[1920px] */}
            <div className="flex h-8 flex-1 justify-around items-center w-[1320px] lg:min-w-[1320px]">  {/* w-[1320px] */}
                <div className="text-2xl w-[109px] h-8 font-bold font-[Helvetica
]">Food<span className="text-[#FF9F0D]">tuck</span></div>

                <nav className="hidden md:flex space-x-10 h-6">  {/* w-[508px] */}
                    <Link href="/Home" className="font">Home</Link>
                    <Link href="/Menu" className="font">Menu</Link>
                    <Link href="/Blog" className="font">Blog</Link>
                    <Link href="/Pages" className="font">Pages</Link>
                    <Link href="/About" className="font">About</Link>
                    <Link href="/Shop" className="font">Shop</Link>
                    <Link href="/Contact" className="font">Contact</Link>
                </nav>
                <div className="flex h-6 gap-x-3">
                    <Image src={Search} alt="Search"></Image>
                    <Image src={User} alt="Search"></Image>
                    <Image src={Premium} alt="Search"></Image>
                </div>
            </div>
        </header>
    );
}
