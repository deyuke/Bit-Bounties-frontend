import { useBounties } from "@/hooks/api/useBounties";
import { Bounty } from "@/types";
import { useState, useEffect } from "react";
import { Loader } from "react-feather";
import { BountyCard, BountyCardSkeleton } from "@/components/molecules/_index";

const Bounties = () => {
    const [currentBounty, setCurrentBounty] = useState<Bounty[] | undefined>(
        undefined
    );
    const [loading, setLoading] = useState(true);
    const { bounties } = useBounties();

    useEffect(() => {
        if (bounties) {
            setLoading(false);
            setCurrentBounty([bounties[0]]);
        }
    }, [bounties]);

    console.log(bounties);

    return (
        <main className="flex justify-center pt-3 px-3 min-h-screen">
            <div className="max-w-7xl w-full">
                <h1>Bounties</h1>
                <div className="w-full h-full flex justify-center">
                    <div className="grid grid-cols-2 h-[80vh] gap-2">
                        <div className="flex flex-col gap-1 overflow-y-scroll p-1 border border-black/35 rounded-xl" id="bounty-scroller">
                            {loading ? (
                                <>
                                    {Array.from({ length: 10 }).map(
                                        (_, index) => (
                                            <BountyCardSkeleton key={index} />
                                        )
                                    )}
                                </>
                            ) : (
                                bounties?.map((bounty) => (
                                    <BountyCard
                                        key={bounty.id}
                                        bounty={bounty}
                                        onClick={() => {
                                            setCurrentBounty([bounty]);
                                            () => console.log(currentBounty);
                                        }}
                                    />
                                ))
                            )}
                        </div>
                        <div className="w-full h-full flex bg-gray-100 rounded-xl p-6 gap-[10px] border border-black/35">
                            {currentBounty ? (
                                <> 
                                    {currentBounty?.map((bounty) => (
                                        <div key={bounty.id}>
                                            <h2>{bounty.title}</h2>
                                            <p>{bounty.description}</p>
                                            <p>
                                                <strong>Company: </strong>{bounty.company_name},{" "}
                                                {bounty.city}, {bounty.country}
                                            </p>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <Loader
                                    className={`animate-spin ${
                                        loading ? "block" : "hidden"
                                    }`}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Bounties;
