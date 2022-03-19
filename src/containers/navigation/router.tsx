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
import Rules from "../rules/rules";
import CombatStages from "../rules/combat/stages/combatStages";
import CombatTypes from "../rules/combat/types/combatTypes";
import Health from "../rules/health/health";
import Maneuvers from "../rules/combat/maneuvers/maneuvers";
import StatusEffects from "../rules/combat/statuseffects/statusEffects";
import Frenzy from "../rules/frenzy/frenzy";
import BloodBond from "../rules/bloodbond/bloodbond";

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
            <Route path="/rules/" element={<Rules />} />
            <Route path="/rules/combat/stages/*" element={<CombatStages />} />
            <Route path="/rules/combat/types/*" element={<CombatTypes />} />
            <Route path="/rules/combat/maneuvers/*" element={<Maneuvers />} />
            <Route path="/rules/health/*" element={<Health />} />
            <Route path="/rules/frenzy/*" element={<Frenzy />} />
            <Route path="/rules/bloodbond/*" element={<BloodBond />} />
            <Route path="/rules/statuses/*" element={<StatusEffects />} />
        </Routes>
    )
}

export default NavigationRouter;