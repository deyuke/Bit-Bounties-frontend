import Image from "next/image";

const Navbar = () => {
    return (
// Make a navbar with the logo on the left side and 2 buttons on the right side. make the top of the navbar have a 3px stroke in this color: #FFA200. Use tailwind css for the styling.
        <nav className="flex justify-between items-center bg-white text-black sticky pb-[15px] pt-[12px] px-[30px] border-t-primary border-t-[3px]">
            <Image src="/Bit-Bounties-logo.svg" alt="Bit Bounties Logo" width={215.66} height={50} />
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
}

export default Navbar;