import {NintyNineBottles} from './ninty-nine-bottles';

describe('ninty-nine-bottles', () => {
    test('should log 6 times when the number of bottles start at 2', () => {
        const logSpy = spyOn(console, 'log');
        const nintyNineBottles = new NintyNineBottles();
        nintyNineBottles.singSong(2);
        expect(logSpy).toHaveBeenCalledTimes(6);
    });

    test('should log 4 times when the number of bottles start at 1', () => {
        const logSpy = spyOn(console, 'log');
        const nintyNineBottles = new NintyNineBottles();
        nintyNineBottles.singSong(1);
        expect(logSpy).toHaveBeenCalledTimes(4);
    });
});
