export interface InformationCharacter {
    name: string;
    titles: string[];
    description: JSX.Element;
}

const jonathan: InformationCharacter = {
    name: "Jonathan 'Maximilian' Mercer",
    titles: ["Tremere", "Prince"], 
    description: (
        <>
            <p>The Prince of Miami after Poe met his Final Death. He leads the Tremere and all the kindred of the city. He is the childe of Maximilian Strauss and has much respect for Strauss to the point he chose to replace his last name with Strauss' first name.</p>
            <p>As the leader of the Camarilla of the city, Jonathan has immense say in city business. However unlike his predecessor he does not have unending pockets and has extra responsibilities both to the Chantry and to the Pyramid.</p>
        </>
    )
}

const cedric: InformationCharacter = {
    name: "Cedric Pattison",
    titles: ["Tremere", "Sheriff"], 
    description: (
        <>
            <p>Franklin's sire and the Prince's childe. He is quite new within the ranks of the Tremere as he was embraced three years ago and is a little slow compared to his Tremere bretheren.</p>
            <p>He has gotten the title of Sheriff, as the Prince does not trust the other clans to be his sword. This is not surprising when the Prince's headquarters are within the closely guarded Tremere Chantry.</p>
        </>
    )
}

const reeves: InformationCharacter = {
    name: "Logan Reeves",
    titles: ["Ventrue", "Primogen"], 
    description: (
        <>
            <p>Logan is a fashion entrepreneur. While he is no model and keeps out of the limelight he does have significant power within the clothing business and Miami as a whole.</p>
            <p>After Dallas Poe met his Final Death, Logan became primogen of the Ventrue and has a lot of power within the Miami Camarilla.</p>
        </>
    )
}

const victoria: InformationCharacter = {
    name: "Victoria Moore",
    titles: ["Ventrue"], 
    description: (
        <>
            <p>Victoria was Logan's ghoul for decades doing secretary work for him. The not-so-unusual event of a relationship between secretary and CEO happened which in the end concluded with Poe giving Logan the right to embrace Victoria into the Ventrue family.</p>
            <p>She is fiercely loyal to Logan and keeps doing secretary work for Logan Industries Inc. and is his right hand in Primogen responsibilities to this date, but has ghouls of her own to keep the business going at daytime.</p>
        </>
    )
}

const laila: InformationCharacter = {
    name: "Laila Hill",
    titles: ["Malkavian", "Primogen"], 
    description: (
        <>
            <p>Laila is the local cowgirl and works at No Mercy. She was in debt to Fredrich Giovanni due to spending too much money on cowboy merch with a mastercard.</p>
            <p>After the demise of Jasmine Bailey, the previous Malkavian Primogen who got diablerized by Giovanni, she is now the Primogen of the Malkavians in the city which is comprised of her and her sister Makenzie.</p>
        </>
    )
}

const makenzie: InformationCharacter = {
    name: "Makenzie Hill",
    titles: ["Malkavian"], 
    description: (
        <>
            <p>Makenzie is the little sister of Laila. Of the two sisters she is the more timid and paranoid one and has gotten in trouble for draining clients previously, a situation that was solved by Rosalie.</p>
            <p>She also works at No Mercy for easy blood supplies.</p>
        </>
    )
}

const ashton: InformationCharacter = {
    name: "Ashton Nathaniel Miller",
    titles: ["Toreador", "Primogen"], 
    description: (
        <>
            <p>After the Final Death of Jaxon Leonardo Wynwood during the battle for Miami, his childe Ashton has taken Jaxon's role as Primogen of the Toreador and the proprietor of the Wynwood Art District in Miami.</p>
            <p>He has been busy with Toreador businesss and fixing up the art district after the fire caused by the Sabbat and has little time for the Prince's plans and politics at the moment.</p>
        </>
    )
}

const eduardo: InformationCharacter = {
    name: "Eduardo Cortez",
    titles: ["Brujah", "Primogen"], 
    description: (
        <>
            <p>The abscent Primogen of the Brujah. Eduardo is a free soul and does what he wants, he is not interested in the Camarilla politics or the Prince's orders. However when the leader of the Brujah's unlife is threatened he is not afraid to defend himself.</p>
            <p>After the defeat of the Sabbat he's been seen around town once in a while, and sometimes reluctantly does his Primogen requirements, but rarely meets up with the rest of the Brujah or any other kindred unless it benefits him.</p>
        </>
    )
}

const reed: InformationCharacter = {
    name: "Michelle Reed",
    titles: ["Brujah"], 
    description: (
        <>
            <p>Another worker at No Mercy. She got put in jail after a frenzy episode and was bailed out by Fredrich Giovanni before the sunlight in the jail window got to her which in turn made her indebted to him.</p>
            <p>She still works at No Mercy and is the more aggressive and hot headed of the workers there.</p>
        </>
    )
}

const iker: InformationCharacter = {
    name: "Iker",
    titles: ["Nosferatu", "Primogen"], 
    description: (
        <>
            <p>The leader and Primogen of the Nosferatu. Just like the rest of the Nosferatu, not much is known about Iker.</p>
            <p>His loyalty is with the Camarilla, but it is known that he did not initially accept Jonathan as Prince.</p>
            <p>There are other Nosferatu other than Iker around, but considering their curse they are not widely known by the other Kindred in the city. This anonymity is something they find highly advantageous.</p>
        </>
    )
}

const characters = [jonathan, cedric, reeves, victoria, laila, makenzie, ashton, eduardo, reed, iker]

export default characters;