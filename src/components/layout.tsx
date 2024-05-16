import { Navbar } from "./organisms/_index";

// Path: bit-bounties/src/components/layout.tsx
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;
