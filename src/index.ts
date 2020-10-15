import {NintyNineBottles} from './services/ninty-nine-bottles';

export function execute(): void {
    console.log('Starting to sing...');
    const song = new NintyNineBottles();
    song.singSong();
    console.log('Thank you!');
}

execute();
