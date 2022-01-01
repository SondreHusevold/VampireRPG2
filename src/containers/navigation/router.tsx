import { Route, Routes } from "react-router-dom";
import ClanDetail from "../clans/clanDetails";
import Clans from "../clans/clans";
import Haven from "../haven/haven";
import Information from "../information/information";

function NavigationRouter() {
    return (
        <Routes>
            <Route path="/" element={<Haven />} />
            <Route path="/information" element={<Information />} />
            <Route path="/clans" element={<Clans />} />
            <Route path="/clans/:name/*" element={<ClanDetail />} />
        </Routes>
    )
}

export default NavigationRouter;