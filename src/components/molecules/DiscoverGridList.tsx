import { BountyCard } from "./_index";
import { Button } from "../atoms/_index";
import { useBounties } from "../../hooks/useBounties";
import { ArrowRight } from "react-feather";

const DiscoverGridList = () => {
    const { bounties } = useBounties();

    return (
        <div className="bg-white rounded-2xl p-[10px] w-full flex flex-col items-center gap-[10px] justify-center">
            <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 ">
                {bounties?.slice(0, 6).map((bounty) => (
                    <BountyCard key={bounty.id} bounty={bounty} />
                ))}
            </div>
            <Button color="primary" size="lg" className="w-min whitespace-nowrap">
                View All Bounties
                <ArrowRight size={16} />
            </Button>
        </div>
    );
};

export default DiscoverGridList;