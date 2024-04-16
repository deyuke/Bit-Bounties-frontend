import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-white text-black sticky pb-[15px] pt-[12px] px-[30px] border-t-primary border-t-[3px]">
            <Link href="/" className="cursor-pointer">
                <Image
                    src="/Bit-Bounties-logo.svg"
                    alt="Bit Bounties Logo"
                    width={215.66}
                    height={50}
                />
            </Link>
            <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
