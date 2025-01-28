import { useEffect, useState } from "react";
import axios from "axios";
import { Posting, Bounty, Company } from "../../../types";

export const useBounties = () => {
    const [postings, setPostings] = useState<Posting[]>([]);
    const [companyData, setCompanyData] = useState<Company[] | undefined>(
        undefined
    );
    const [bounties, setBounties] = useState<Bounty[]>();

    useEffect(() => {
        axios
            .get("/api/postings.json")
            .then((res) => {
                setPostings(res.data);
            })
            .catch((error) => {
                console.error("Error fetching postings:", error);
            });
    }, []);

    useEffect(() => {
        axios
            .get("/api/companies.json")
            .then((res) => {
                setCompanyData(
                    postings
                        .map((bounties) =>
                            res.data.find(
                                (company: Company) =>
                                    company.id === bounties.company_id
                            )
                        )
                        .filter(
                            (company): company is Company =>
                                company !== undefined
                        )
                );
            })
            .catch((error) => {
                console.error("Error fetching company data:", error);
            });
    }, [postings]);

    useEffect(() => {
        if (companyData) {
            const combinedData = postings.map((bounties) => {
                const company = companyData.find(
                    (company) => company.id === bounties.company_id
                );
                return {
                    ...bounties,
                    company_name: company ? company.name : "Unknown Company",
                    city: company ? company.city : "Unknown City",
                    country: company ? company.country : "Unknown Country",
                };
            });
            setBounties(combinedData);
        }
    }, [companyData, postings]);

    return { postings, companyData, bounties };
};
