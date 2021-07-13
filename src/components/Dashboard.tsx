import { useAuth } from "./contexts/AuthContex";

export default function Dashboard() {
    const { currentUser }: { currentUser: (any) } = useAuth();

    return (
        <>
            <p>Stuff for the dashboard</p>
            <p> {currentUser.email} </p>
        </>
    );
}

{/*Testkomponent for å gjøre meg bedre kjent med funksjonalitet knyttet til useContext
og rendering basert på currentUser */}