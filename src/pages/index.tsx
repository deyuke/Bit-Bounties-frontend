import Image from "next/image";
export default function Home() {
    return (
        <main className="flex justify-center">
            <div className="max-w-7xl">
              <div className="flex justify-between">
                <div className="flex flex-col gap-[40px] w-[750px]">
                    <Image
                        src="/Bit-Bounties-logo.svg"
                        alt="Bit Bounties Logo"
                        width={466}
                        height={108}
                    />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <h1 className="font-[50px]">
                            Welcome to Bit Bounties - Where Your Skills Meet
                            Opportunities!
                        </h1>
                        <p className="text-[32px] font-normal text-secondary">
                            Are you tired of the same old job application
                            routine? Bit Bounties is here to transform your job
                            search experience!
                        </p>
                      </div>
                        <div className="flex gap-3 text-2xl">
                            <button className="bg-primary hover:bg-primary/85 hover:shadow-primary/30 hover:shadow-md text-black py-3 px-[18px] rounded-lg ">
                                Start hunting
                            </button>
                            <button className="hover:bg-primary/10 text-primary py-3 px-[18px] rounded-lg">
                                How it works
                            </button>
                        </div>
                    </div>
                </div>
                <div >
                    <Image src={"/img/hero2.jpg"} layout="fill" alt="A student who used BitBounties" width={512} height={512}/>
                </div>
              </div>
            </div>
        </main>
    );
}
