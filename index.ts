import { merge } from 'rxjs/operators';
import { interval } from 'rxjs';

//emit every 2.5 seconds
const first = interval(4500);
//emit every 1 second
const second = interval(3000);
//used as instance method
const example = first.pipe(merge(second));
//output: 0,1,0,2....
const subscribe = example.subscribe((val) => console.log(val));
