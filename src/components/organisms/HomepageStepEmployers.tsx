import React from "react";

const HomepageStepEmployers = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-4">
                <h2>For Employers</h2>
                <p className="text-lg text-center">
                    Employers post bounties for students to complete. Find top talents and streamline your hiring process, all in one place. 
                    BitBounties is the easiest way to find and hire top talent. 
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-row gap-8 w-full">
                    <div className="w-full bg-[#f0f0f0]">
                        <img
                            src="/img/bitbounties-admin.webp"
                            alt="img"
                            className="w-full object-cover rounded-[20px]"
                        />
                    </div>
                    <div className="flex flex-col gap-2 h-full justify-center " >
                        <h3>Post Bounties</h3>
                        <p>
                            Employers, post bounties for developers to complete.
                            Find top talents and streamline your hiring process
                            effortlessly.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomepageStepEmployers;
