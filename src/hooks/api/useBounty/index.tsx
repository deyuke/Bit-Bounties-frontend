import axios from "axios";
import { Posting, Bounty, Company } from "../../../types";

async function fetchBountiesFromAPI() {
    try {
        // Fetch postings
        const postingsResponse = await axios.get("https://decent-hookworm-clearly.ngrok-free.app/api/postings");
        const postings: Posting[] = postingsResponse.data;

        // Fetch company data
        const companiesResponse = await axios.get("https://decent-hookworm-clearly.ngrok-free.app/api/companies");
        const companies: Company[] = companiesResponse.data;

        // Combine postings with company data
        const combinedData: Bounty[] = postings.map(posting => {
            const company = companies.find(company => company.id === posting.company_id);
            return {
                ...posting,
                company_name: company ? company.name : "Unknown Company",
                city: company ? company.city : "Unknown City",
                country: company ? company.country : "Unknown Country",
            };
        });

        return combinedData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

export async function getServerSideProps(context) {
    const { id } = context.query;

    // Fetch bounties using the corrected function
    const bounties = await fetchBountiesFromAPI();
    
    const bounty = bounties.find(bounty => bounty.id === id);

    return {
        props: { bounty },
    };
}
