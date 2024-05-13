// 'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "../atoms/_index";
import { useRouter } from "next/compat/router";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

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
            <div className="flex justify-end gap-4">
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
        </nav>
    );
};

export default Navbar;
