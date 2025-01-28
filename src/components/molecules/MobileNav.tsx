import React, { useEffect } from "react";
import { X } from "react-feather";
import { useRouter } from "next/compat/router";
import { Button } from "../atoms/_index";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const MobileNav = ({
    openMenu,
    setOpenMenu,
}: {
    openMenu: boolean;
    setOpenMenu: (value: boolean) => void;
}) => {
    function closeMenu() {
        setOpenMenu(false);
    }
    const router = useRouter();

    useEffect(() => {
        if (openMenu) {
            disableBodyScroll(document.body);
            document.body.style.overflow = "hidden";
        } else {
            enableBodyScroll(document.body);
            document.body.style.overflow = "";
        }
    }, [openMenu]);

    return (
        <>
            {/* {openMenu &&  */}
            <div
                className={`fixed top-0 left-0 w-screen h-screen bg-white/70 backdrop-blur-xl z-10 transform transition-transform duration-300 ${
                    openMenu ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ transform: openMenu ? "translateX(0)" : "translateX(100%)" }}
            >
                <div className="flex flex-col gap-4 items-center pt-20">
                    <X
                        color="#FFA200"
                        size={40}
                        onClick={() => setOpenMenu(false)}
                        className="fixed top-0 right-0 mt-[20px] mr-3"
                    />
                    <Button
                        text="Sign up"
                        color="primary"
                        size="lg"
                        onClick={() => {
                            router?.push(`/sign-up?redirect=${router?.asPath}`);
                            closeMenu();
                        }}
                    />
                    <Button
                        text="Login"
                        color="primary"
                        flat
                        size="lg"
                        onClick={() => {
                            router?.push(`/login?redirect=${router?.asPath}`);
                            closeMenu();
                        }}
                    />
                </div>
            </div>
            {/* } */}
        </>
    );
};

export default MobileNav;
