import { Button } from "../components/atoms/_index";
import { useRouter } from "next/compat/router";



export default function Testing() {
    const router = useRouter();
    return (
        <div>
            <h1 className="">Testing Page</h1>
            <h2>All buttons and colors: </h2>
            <Button text="Default" color="primary" onClick={() => console.log(router?.asPath)}/>
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

                
            Button</div>
            {/* <div className="flex gap-3">
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="text-primary w-8 h-8 bg-transparent hover:shadow-md hover:shadow-primary/40 hover:bg-primary/10 disabled:bg-primary/20 active:bg-primary/30 focus:bg-primary/30" />
                    <Button flat color="primary" text="Primary" onClick={()=>console.log('clicked')}/>
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="text-secondary w-8 h-8 bg-transparent hover:shadow-md hover:shadow-secondary/40 hover:bg-secondary/10 disabled:bg-secondary/20 active:bg-secondary/30 focus:bg-secondary/30" />
                    <Button disabled flat color="secondary" text="Secondary" />
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="text-info w-8 h-8 bg-transparent hover:shadow-md hover:shadow-info/40 hover:bg-info/10 disabled:bg-info/20 active:bg-info/30 focus:bg-info/30" />
                    <Button flat color="info" text="Info" />
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="text-success w-8 h-8 bg-transparent hover:shadow-md hover:shadow-success/40 hover:bg-success/10 disabled:bg-success/20 active:bg-success/30 focus:bg-success/30" />
                    <Button flat color="success" text="Success" />
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="text-danger w-8 h-8 bg-transparent hover:shadow-md hover:shadow-danger/40 hover:bg-danger/10 disabled:bg-danger/20 active:bg-danger/30 focus:bg-danger/30" />
                    <Button flat color="danger" text="Danger" />
                </div>
                <div className="flex flex-col gap-2 rounded-xl items-center">
                    <div className="text-warning w-8 h-8 bg-transparent hover:shadow-md hover:shadow-warning/40 hover:bg-warning/10 disabled:bg-warning/20 active:bg-warning/30 focus:bg-warning/30" />
                    <Button flat color="warning" text="Warning" />
                </div>

                
            </div> */}
        </div>
    );
}
