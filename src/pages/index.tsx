import { HeroSection, HomepageStepDiscover } from "@/components/organisms/_index";

export default function Home() {
    return (
        <main className="flex justify-center items-center pt-8 lg:pt-36 px-3">
            <div className="max-w-7xl w-full">
                <div>
                    <HeroSection />
                    <div className="mt-32 flex flex-col gap-24">
                        <HomepageStepDiscover />
                    </div>
                </div>
            </div>
        </main>
    );
}

// width={512} height={512}
