import { merge } from 'rxjs/operators';
import { interval } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/merge
// Example 2: merge 2 observables, instance method

//emit every 5 seconds
// const first = interval(4500);
// const second = interval(3000);
// const example = first.pipe(merge(second));
// const subscribe = example.subscribe((val) => console.log(val));
//used as instance method
//output: 0,1,0,2....

const observ_1 = interval(10500);
const observ_2 = interval(9000);
const exmp = observ_1.pipe(merge(observ_2));
const sub = exmp.subscribe((val) => console.log(val));
