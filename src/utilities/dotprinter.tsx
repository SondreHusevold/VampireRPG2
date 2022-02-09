export function PrintDots(amount: number) {
    let dots = "";
    
    for (let index = 0; index < amount; index++) {
        dots += "●";
    }

    return dots;
}

export function PrintEmptyDots(amount: number) {
    let dots = "";
    
    for (let index = 0; index < amount; index++) {
        dots += "○";
    }

    return dots;
}