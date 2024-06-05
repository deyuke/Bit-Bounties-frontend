import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-black relative bottom-0 mt-16 flex justify-center w-full text-white p-[10px]">
            <div className="max-w-7xl w-full flex justify-between p-[10px]">
                <div className="flex flex-col justify-start gap-[10px]">
                    <img
                        src="/Bit-Bounties-logo-white.svg"
                        alt="Bit Bounties logo white"
                        className="h-[50px] w-[215.66px]"
                    />
                    <p className="opacity-80 text-[16px]">
                        Copyright ©, Bit Bounties 2024, All Rights Reserved
                    </p>
                </div>
                <div className="flex flex-col text-[16px] justify-between text-right">
                    <Link href="#">Home</Link>
                    <Link href="#">Bounties</Link>
                    <Link href="#">For Businesses</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
