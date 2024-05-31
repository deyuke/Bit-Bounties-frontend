import { DiscoverGridList } from "../molecules/_index";

const HomepageStepDiscover = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col justify-center items-center text-center">
                <h2>Discover Your Next Adventure</h2>
                <p className="max-w-[600px]">
                    Explore a world of tailored challenges – the ideal
                    opportunity is just a search away. Hunt for bounties that
                    match your skills and redefine your career path on Bit
                    Bounties.
                </p>
            </div>
            <DiscoverGridList />
        </div>
    );
};

export default HomepageStepDiscover;
