import React from "react";
import { Button } from "../atoms/_index";
import Lottie from "lottie-react";
import animationData from "./search.json";

const HomepageStepHowItWorks = () => {
    return (
        <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col justify-center items-center text-center">
                <h2>How it works</h2>
                <p className="max-w-[600px]">
                    Discover tailored challenges, showcase your skills, and
                    connect directly with employers. For businesses, post
                    bounties, find top talents, and streamline your intern
                    hiring process effortlessly. The future of intern hiring is
                    now – embrace it with Bit Bounties!
                </p>
            </div>

            <div className="flex gap-4 w-full flex-col lg:flex-row">
                <div className="flex flex-col gap-5 w-full">
                    <div className="h-[300px] w-full bg-[#f0f0f0] rounded-[20px]">
                        <img
                            src="https://lottie.host/embed/58469e13-62ec-4338-89c2-ae0618586e91/XnAPSyJnlc.lottie"
                            alt="img"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>Explore Bounties</h3>
                        <p>Job seekers, find challenges that match your expertise and accept the ones that ignite your passion.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <div className="h-[300px] w-full bg-[#f0f0f0] rounded-[20px]">
                        <img
                            src="https://lottie.host/embed/58469e13-62ec-4338-89c2-ae0618586e91/XnAPSyJnlc.lottie"
                            alt="img"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>Showcase Your Skills</h3>
                        <p>Complete the bounty and let employers witness your capabilities firsthand.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <div className="h-[300px] w-full bg-[#f0f0f0] rounded-[20px]">
                        <img
                            src="https://lottie.host/embed/58469e13-62ec-4338-89c2-ae0618586e91/XnAPSyJnlc.lottie"
                            alt="img"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3>Direct Connections</h3>
                        <p>Employers, skip the paperwork! Discover exceptional talents and connect directly with the best Bounty Hunters.</p>
                    </div>
                </div>
            </div>

            <Button
                className="w-min whitespace-nowrap"
                size="lg"
                text="Start hunting now!"
            />
        </div>
    );
};

export default HomepageStepHowItWorks;
