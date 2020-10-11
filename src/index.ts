const world = 'World!';
export function hello(word: string = world): void {
  console.log(`Hello ${word}!`);
}

hello();
