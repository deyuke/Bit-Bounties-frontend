import React from "react";
import { ArrowRight, Clock, Code, MapPin } from "react-feather";


const BountyCardSkeleton = () => {
    return (
        <div className="flex flex-col justify-between border border-gray-300 rounded-lg p-6 gap-[10px] w-full animate-pulse">
            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col justify-between">
                    <div className="h-6 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2 mt-2"></div>
                </div>
                <div className="flex flex-col gap-[10px] text-black/70">
                    <div className="grid grid-cols-1 md:flex flex-wrap gap-3 text-[11px]">
                        <div className="flex gap-1 items-center w-auto">
                            <Clock size={13} className="text-gray-100" />
                            <div className="h-4 bg-gray-100 rounded w-16"></div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <MapPin size={13} className="text-gray-100" />
                            <div className="h-4 bg-gray-100 rounded w-24"></div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Code size={13} className="text-gray-100" />
                            <div className="h-4 bg-gray-100 rounded w-32"></div>
                        </div>
                    </div>
                    <div className="h-12 bg-gray-100 rounded mt-2"></div>
                </div>
            </div>
            <div className="justify-end mt-4">
                <div className="inline-flex items-center bg-gray-100 rounded px-4 py-2">
                    <div className="h-6 bg-gray-100 rounded w-24"></div>
                    <ArrowRight size={16} className="text-gray-100 ml-2" />
                </div>
            </div>
        </div>
    );
};

export default BountyCardSkeleton;
