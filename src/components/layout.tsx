import Navbar from "./organisms/Navbar";

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
