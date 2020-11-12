export interface INintyNineBottles {
    singSong(numberOfBottles: number): void;
}

export class NintyNineBottles implements INintyNineBottles {
    singSong(numberOfBottles = 99): void {
        while (numberOfBottles) {
            if (numberOfBottles >= 2) {
                const currentBottles = this.getBottles(numberOfBottles);
                console.log(
                    `${currentBottles} of beer on the wall, ${currentBottles} of beer.`
                );
                numberOfBottles--;
                const remainingBottles = this.getBottles(numberOfBottles);
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

    private getBottles(numberOfBottles: number): string {
        if (numberOfBottles === 1) {
            return '1 bottle';
        } else if (numberOfBottles === 6) {
            return '1 six pack';
        } else {
            return `${numberOfBottles} bottles`;
        }
    }
}
