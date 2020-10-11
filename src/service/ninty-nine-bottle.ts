export interface INintyNineBottles {
    singSong(): void;
}

export class NintyNineBottles implements INintyNineBottles {
    singSong(): void {
        let numberOfBottles = 99;
        while (numberOfBottles) {
            console.log('Take one down!');
            numberOfBottles--;
        }
    }
}
