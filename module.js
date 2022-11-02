/* export function strictEquals(a, b) {
    if (Object.is(a, b)) {
        if (Object.is(a, NaN) && Object.is(b, NaN)) {
            return false;
        } else {
            return true;
        }
    } else {
        if (
            (Object.is(a, 0) && Object.is(b, -0)) ||
            (Object.is(a, -0) && Object.is(b, 0))
        ) {
            return true;
        } else {
            return false;
        }
    }
} */

// Conditional, ternary operator
export function strictEquals(a, b) {
    if (Object.is(a, b)) {
        return !(Object.is(a, NaN) && Object.is(b, NaN)) ? true : false; //! in the condition for the value1 to be true
    } else {
        return (Object.is(a, 0) && Object.is(b, -0)) ||
            (Object.is(a, -0) && Object.is(b, 0))
            ? true
            : false;
    }
}
