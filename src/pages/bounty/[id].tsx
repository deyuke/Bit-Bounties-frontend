import {useRouter} from "next/compat/router";
import {useBounties} from "@/hooks/api/useBounties";
import {NextRouter} from "next/router";
import {useState, useEffect} from "react";
import {Bounty} from "@/types";

const BountyDetails = () => {
    const router: NextRouter | null = useRouter();
    const {bounties} = useBounties();
    const [currentBounty, setCurrentBounty] = useState<Bounty>();
    const [loading, setLoading] = useState<boolean>(true);

    // Ensure router and router.query are defined before accessing router.query.id
    const id = router && router.query ? parseInt(router.query.id as string, 10) : null;

    useEffect(() => {
        if (id !== null && Array.isArray(bounties)) {
            const bounty = bounties.find((bounty) => bounty.id === id);
            setCurrentBounty(bounty);
            console.log(bounty);
        }
    }, [id, bounties]);

    useEffect(() => {
        if (currentBounty) {
            setLoading(false);
        }
    }, [currentBounty]);

    return (
        <div>
            {loading ? <div>Loading...</div> :
                <>
                    {currentBounty === undefined ? <div>Bounty not found</div> : <>
                        <h1>{currentBounty.title}</h1>
                        <div>{currentBounty.description}</div>
                    </>
                    }
                </>
            }
        </div>
    );
};

export default BountyDetails;