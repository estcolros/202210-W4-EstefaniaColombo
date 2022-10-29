![banner-week3](https://res.cloudinary.com/practicaldev/image/fetch/s--vKAi2Ipy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/dcuhxplnq6gcuevp5vpp.png)

# Challenge week 5

### JS Mental Models

##### First project Javascript using mental models and Eslint

##### strictEquals function

Write in a module of your own, a function called `strictEquals(a, b)` that returns the same value as `a === b`. Your implementation cannot use the operators `===` or `!==`.

Given the function `strictEquals`
When comparing \<A\> y \<B\>  
Then the result will be \<Result\>

| A       | B     | RESULT |                   |
| ------- | ----- | ------ | ----------------- |
| 1       | 1     | true   |                   |
| NaN     | NaN   | false  | // Rule Exception |
| 0       | -0    | true   | // Rule Exception |
| -0      | 0     | true   | // Rule Exception |
| 1       | "1"   | false  |                   |
| true    | false | false  |                   |
| false   | false | true   |                   |
| "Water" | "oil" | false  |

Create a repo as usual, with the same hook husky as before.

-   Create project including ESLint (airbnb) and prettier
-   Create the repo, protect the branch and add husky
-   Create the working branch:
-   Merge with PR
