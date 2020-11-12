export interface INintyNineBottles {
    singSong(numberOfBottles: number): void;
}

export class NintyNineBottles implements INintyNineBottles {
    singSong(numberOfBottles = 99): void {
        while (numberOfBottles) {
            if (numberOfBottles >= 2) {
                console.log(
                    `${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} bottles of beer.`
                );
                numberOfBottles--;
                const remainingBottles = this.getRemainingBottles(
                    numberOfBottles
                );
                console.log(
                    `Take one down, pass it around, ${remainingBottles} of beer on the wall...`
                );
            } else {
                console.log(
                    `${numberOfBottles} bottle of beer on the wall, ${numberOfBottles} bottle of beer.`
                );
                numberOfBottles--;
                console.log(
                    'Take one down, pass it around, no more bottles of beer on the wall...'
                );
            }
        }

        console.log(
            'No more bottles of beer on the wall, no more bottles of beer.'
        );
        console.log(
            'Go to the store and buy some more, 99 bottles of beer on the wall...'
        );
    }

    private getRemainingBottles(numberOfBottles: number): string {
        if (numberOfBottles === 1) {
            return '1 bottle';
        } else if (numberOfBottles === 6) {
            return '1 six pack';
        } else {
            return `${numberOfBottles} bottles`;
        }
    }
}
