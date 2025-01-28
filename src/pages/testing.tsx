import { Button } from "../components/atoms/_index";
import { useRouter } from "next/compat/router";
import axios from "axios";

export default function Testing() {
    const router = useRouter();

    function callApi() {
        axios
            .get(
                "https://decent-hookworm-clearly.ngrok-free.app/api/companies",
                {
                    headers: {
                        "Content-Type": "application/json",
                        "ngrok-skip-browser-warning": "asdf",
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error("Error fetching companies:", error);
            });
    }
    callApi();

    return (
        <div>
            <h1 className="">Testing Page</h1>
            <h2>All buttons and colors: </h2>
            <Button
                text="Default"
                color="primary"
                onClick={() => console.log(router?.asPath)}
            />
            <div className="flex gap-3">
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="w-8 h-8 bg-primary hover:shadow-md hover:shadow-primary/40 hover:bg-primary/85  disabled:bg-primary/50 active:bg-primary/30 focus:bg-primary/30 active:bg-primary-60" />
                    <Button color="primary" text="Primary" />
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="w-8 h-8 bg-secondary hover:shadow-md hover:shadow-secondary/40 hover:bg-secondary/85" />
                    <Button color="secondary" text="Secondary" />
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="w-8 h-8 bg-info hover:shadow-md hover:shadow-info/40 hover:bg-info/85" />
                    <Button color="info" text="Info" />
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="w-8 h-8 bg-success hover:shadow-md hover:shadow-success/40" />
                    <Button color="success" text="Success" />
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="w-8 h-8 bg-danger hover:shadow-md hover:shadow-danger/40 hover:bg-danger/85" />
                    <Button color="danger" text="Danger" />
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="w-8 h-8 bg-warning hover:shadow-md hover:shadow-warning/40 hover:bg-warning/85" />
                    <Button color="warning" text="Warning" />
                </div>
                Button
            </div>
        </div>
    );
}
