export interface INintyNineBottles {
    singSong(): void;
}

export class NintyNineBottles implements INintyNineBottles {
    singSong(numberOfBottles = 99): void {
        while (numberOfBottles) {
            console.log(
                `${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} bottles of beer.`
            );
            numberOfBottles--;
            console.log(
                `Take one down, pass it around, ${numberOfBottles} bottles of beer on the wall...`
            );
        }

        console.log(
            'No more bottles of beer on the wall, no more bottles of beer.'
        );
        console.log(
            'Go to the store and buy some more, 99 bottles of beer on the wall...'
        );
    }
}
