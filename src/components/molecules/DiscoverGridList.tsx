import { BountyCard, BountyCardSkeleton } from "./_index";
import { Button } from "../atoms/_index";
import { useBounties } from "../../hooks/api/useBounties";
import { ArrowRight } from "react-feather";
import Link from "next/link";

const DiscoverGridList = () => {
    const { bounties } = useBounties();

    return (
        <div className="bg-white rounded-2xl p-[10px] w-full flex flex-col items-center gap-[10px] justify-center">
            <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 w-full">
                {bounties ? (
                    bounties
                        ?.slice(0, 6)
                        .map((bounty) => (
                            <BountyCard key={bounty.id} bounty={bounty} />
                        ))
                ) : 
                    
                    // <BountyCardSkeleton />
                    // map the bounty card skeleton 6 times
                    Array(6)
                        .fill(0)
                        .map((_, i) => <BountyCardSkeleton key={i} />)
                }
            </div>
            <Link href="/bounties">
                <Button
                    color="primary"
                    size="lg"
                    className="w-min whitespace-nowrap"
                >
                    View All Bounties
                    <ArrowRight size={16} />
                </Button>
            </Link>
        </div>
    );
};

export default DiscoverGridList;
