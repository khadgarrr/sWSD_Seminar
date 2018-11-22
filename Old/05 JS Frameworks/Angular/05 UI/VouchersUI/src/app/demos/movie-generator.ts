import { Movie } from "./movie";

export function* MovieGenerator(elements: number) {

  const intervalInSeconds: number = 20;
  const substractMinutes: number = 2;

  let dt = new Date();
  let t0: Date = new Date(dt.setMinutes(dt.getMinutes() - substractMinutes));

  for (let i = 0; i < elements; i++) {
    let mi: Movie = <Movie>{
      title: `Movie ${i+1}`,
      startTime: new Date(t0.setSeconds(t0.getSeconds() + intervalInSeconds))
    };
    yield mi;
  }
}

// Generator returns:
//
// interface IteratorResult<T> {
//     done: boolean;
//     value: T;
// }
