// 'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/_index";
import { useRouter } from "next/compat/router";
import { useState } from "react";
import { Menu } from "react-feather";
import { MobileNav } from "../molecules/_index";

const Navbar = () => {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="flex justify-between items-center bg-white/80 backdrop-blur-xl text-black sticky top-0 pb-[15px] pt-[12px] px-3 md:px-[30px] border-t-primary border-t-[3px] z-20 ">
            <div className="flex flex-row items-center ">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="/Bit-Bounties-logo.svg"
                        alt="Bit Bounties Logo"
                        width={215.66}
                        height={50}
                    />
                </Link>
                <ul className="hidden md:flex gap-6 items-center ml-8 text-lg pt-1">
                    <li>
                        <Link href="/bounties" className="hover:text-primary transition ease-in-out duration-150">
                            Bounties
                        </Link>
                    </li>
                    <li>
                        <Link href="#Employers" className="hover:text-primary transition ease-in-out duration-150">
                            For Employers
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="justify-end gap-4 hidden md:flex text-lg">
                <Button
                    text="Sign up"
                    color="primary"
                    onClick={() => {
                        router?.push(`/sign-up?redirect=${router?.asPath}`);
                    }}
                />
                <Button
                    text="Login"
                    color="primary"
                    flat
                    onClick={() => {
                        router?.push(`/login?redirect=${router?.asPath}`);
                    }}
                />
            </div>
            <div className="md:hidden">
                <Menu
                    color="#FFA200"
                    size={40}
                    onClick={() => setOpenMenu(!openMenu)}
                />
            </div>
            <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </nav>
    );
};

export default Navbar;
