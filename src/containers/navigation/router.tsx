import { Route, Routes } from "react-router-dom";
import Abilities from "../abilities/abilities";
import AbilitiesDetails from "../abilities/abilitiesDetails";
import AttributeDetails from "../attributes/attributeDetails";
import Attributes from "../attributes/attributes";
import ClanDetail from "../clans/clanDetails";
import Clans from "../clans/clans";
import Disciplines from "../disciplines/disciplines";
import DisciplineDetails from "../disciplines/disciplineDetails";
import Haven from "../haven/haven";
import Information from "../information/information";
import Combat from "../combat/combat";
import CombatStages from "../combat/stages/combatStages";
import CombatTypes from "../combat/types/combatTypes";
import Health from "../combat/health/health";

function NavigationRouter() {
    return (
        <Routes>
            <Route path="/" element={<Haven />} />
            <Route path="/information" element={<Information />} />
            <Route path="/clans" element={<Clans />} />
            <Route path="/clans/:name/*" element={<ClanDetail />} />
            <Route path="/attributes" element={<Attributes />} />
            <Route path="/attributes/:name" element={<AttributeDetails />} />
            <Route path="/abilities" element={<Abilities/>} />
            <Route path="/abilities/:name" element={<AbilitiesDetails />} />
            <Route path="/disciplines" element={<Disciplines />} />
            <Route path="/disciplines/:name" element={<DisciplineDetails />} />
            <Route path="/combat/" element={<Combat />} />
            <Route path="/combat/stages/*" element={<CombatStages />} />
            <Route path="/combat/types/*" element={<CombatTypes />} />
            <Route path="/combat/health/*" element={<Health />} />
        </Routes>
    )
}

export default NavigationRouter;