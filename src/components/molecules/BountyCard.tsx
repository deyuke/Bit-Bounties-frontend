import React, { useEffect, useState } from "react";
import { ArrowRight, Clock, Code, MapPin } from "react-feather";
import { Button } from "../atoms/_index";
import { Bounty } from "../../types";
import { timeAgo } from "@/utils/dateUtils";
import Link from "next/link";

const BountyCard = ({ bounty }: { bounty: Bounty }) => {
    const dateStr = bounty.created_at;
    const [timeAgoString, setTimeAgoString] = useState(timeAgo(dateStr));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeAgoString(timeAgo(dateStr));
        }, 60000);

        return () => clearInterval(intervalId);
    }, [dateStr]);

    const techStack = Array.isArray(bounty.stack) ? bounty.stack : [];

    return (
        <div className="flex flex-col justify-between border border-black/35 rounded-lg p-6 gap-[10px] w-full">
            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col justify-between">
                    <h3>{bounty.title}</h3>
                    <p className="opacity-75 text-base">
                        {bounty.company_name}
                    </p>
                </div>
                <div className="flex flex-col gap-[10px] text-black/70">
                    <div className="grid grid-cols-1 md:flex flex-wrap gap-3 text-[11px]  ">
                        <div className="flex gap-1 items-center w-auto">
                            <Clock size={13} />
                            <p className="text-[12px]">{timeAgoString}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <MapPin size={13} />
                            <p className="text-[12px]">
                                {bounty.city + ", " + bounty.country ||
                                    "No location"}
                            </p>
                        </div>

                        <div className="flex gap-1 items-center">
                            <Code size={13} />
                            <p className="text-[12px]">
                                {techStack.length > 0
                                    ? techStack.map((language, index) => (
                                          <span key={language}>
                                              {language}
                                              {index < techStack.length - 1 &&
                                                  ", "}
                                          </span>
                                      ))
                                    : "No stack available"}
                            </p>
                        </div>
                    </div>
                    <div className="text-[14px] ellipsis-container">
                        {bounty.description || "No description available"}
                    </div>
                </div>
            </div>
            <div className="justify-end">
                <Link href={`/bounty/${bounty.id}`}>
                    <Button color="black">
                        View Assignment
                        <ArrowRight size={16} color="white" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default BountyCard;
