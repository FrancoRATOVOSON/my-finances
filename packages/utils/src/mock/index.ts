export * from './faker'

export function sample<T>(factory:()=>T, count:number=5):T[] {
  return new Array(count).fill(null).map(factory)
}

export function getOneIn<T>(list:T[]):T {
  return list[Math.floor(Math.random()*list.length)]
}

// Chat-GPT, in "Get random elements in List" chat
function shuffle<T>(arr: T[]): T[] {
  const shuffled = arr.slice(); // Make a copy of the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements at positions i and j
  }
  return shuffled;
}

export function getManyIn<T>(list:T[]):T[] {
  const numElements = Math.floor(Math.random() * list.length) + 1; // Generate a random number of elements between 1 and the length of the array
  const shuffled = shuffle(list);
  return shuffled.slice(0, numElements);
}
