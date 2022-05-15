import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from './navigation.module.css'

interface RouteMatcher {
    current: string;
    backTo: string;
    name: string;
}

const matcher: RouteMatcher[] = [
    {
        current: "/clans/",
        backTo: "/clans",
        name: "Clans"
    },
    {
        current: "/attributes/",
        backTo: "/attributes",
        name: "Attributes"
    },
    {
        current: "/abilities/",
        backTo: "/abilities",
        name: "Abilities"
    },
    {
        current: "/disciplines/",
        backTo: "/disciplines",
        name: "Disciplines"
    },
    {
        current: "/rules/",
        backTo: "/rules",
        name: "Rules"
    },
]

function GoBackTo() {
    const location = useLocation();
    const navigator = useNavigate();
    const [currentRouteMatch, setCurrentRouteMatch] = useState<RouteMatcher>({
        current: "",
        backTo: "",
        name: ""
    });

    useEffect(() => {
        console.log(location.pathname);
        for (const isMatch of matcher) {
            if(location.pathname.startsWith(isMatch.current)) {
                setCurrentRouteMatch(isMatch);
                return;
            }
        }
        setCurrentRouteMatch({
            backTo: "",
            current: "",
            name: ""
        })
    }, [location])

    if(currentRouteMatch.current === "") {
        return (
            <div/>
        )
    }

    return (
        <button 
            className={`nf nf-oct-arrow_left ${styles.backButton}`} 
            onClick={() => navigator(currentRouteMatch.backTo)}
        > {currentRouteMatch.name}</button>
    )
}

export default GoBackTo;

