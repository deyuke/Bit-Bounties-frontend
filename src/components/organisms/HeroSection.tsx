import { Button } from "../atoms/_index";
import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="flex justify-between w-full flex-col-reverse md:flex-row gap-[40px] lg:gap-0">
            <div className="flex flex-col gap-[40px] lg:w-[750px]">
                <Image
                    src="/Bit-Bounties-logo.svg"
                    alt="Bit Bounties Logo"
                    width={466}
                    height={108}
                    className="hidden lg:block"
                />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-xl text-primary">
                            Skills Match, Bounties Await, Discover!
                        </p>
                        <h1 className="text-2xl lg:text-5xl">
                            Welcome to Bit Bounties - Where Your Skills Meet
                            Opportunities!
                        </h1>
                        <p className="lg:text-[32px] font-normal text-secondary">
                            Are you tired of the same old job application
                            routine? Bit Bounties is here to transform your job
                            search experience!
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3 text-2xl">
                        <Button text="Start hunting" color="primary" />
                        <Button text="How it works" color="primary" flat />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[420px] overflow-hidden h-auto flex items-center">
                <Image
                    src={"/img/hero2.jpg"}
                    alt="A student who used BitBounties"
                    width={0}
                    height={0}
                    sizes="(max-width: 420px) 100vw, 420px"
                    className="rounded-[20px] h-full w-full md:w-[420px] object-cover"
                />
            </div>
        </div>
    );
};

export default HeroSection;