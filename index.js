import { strictEquals } from './module.js';
class testing {
    constructor(A, B) {
        this.A = A;
        this.B = B;
        this.RESULT = strictEquals(A, B);
    }
}

const t1 = new testing(1, 1);
const t2 = new testing(NaN, NaN);
const t3 = new testing(0, -0);
const t4 = new testing(-0, 0);
const t5 = new testing(1, '1');
const t6 = new testing(true, false);
const t7 = new testing(false, false);
const t8 = new testing('Water', 'oil');

const tableTesting = { t1, t2, t3, t4, t5, t6, t7, t8 };

console.table(tableTesting);

/*
RESULT TEST
┌─────────┬─────────┬───────┬────────┐
│ (index) │    A    │   B   │ RESULT │
├─────────┼─────────┼───────┼────────┤
│   t1    │    1    │   1   │  true  │
│   t2    │   NaN   │  NaN  │ false  │
│   t3    │    0    │  -0   │  true  │
│   t4    │   -0    │   0   │  true  │
│   t5    │    1    │  '1'  │ false  │
│   t6    │  true   │ false │ false  │
│   t7    │  false  │ false │  true  │
│   t8    │ 'Water' │ 'oil' │ false  │
└─────────┴─────────┴───────┴────────┘
*/
