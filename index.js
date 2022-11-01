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
