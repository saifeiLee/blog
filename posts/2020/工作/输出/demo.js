function cube(x) {
  return x * x * x;
}
// function sumIntegers(a, b) {
//   let res;
//   if (a > b) res = 0;
//   else res = a + sumIntegers(a + 1, b);
//   return res;
// }

// function sumSquare(a, b) {
//   let res;
//   if (a > b) res = 0;
//   else res = Math.pow(a, 2) + sumSquare(a + 1, b);
//   return res;
// }

// function piSum(a, b) {
//   let res;
//   if (a > b) res = 0;
//   else res = 1 / (a * (a + 2)) + piSum(a + 4, b);
//   return res;
// }

// test sum(1, 3)
// const test1 = sumIntegers(1, 4);
// console.log(test1)

// const test2 = sumSquare(1, 3);
// console.log(test2);
/**
 * 高阶函数sum
 * @param {number} a 所求范围起始点
 * @param {number} b 所求范围终止点
 * @param {function} next 求下一个a
 * @param {function} term 求将要进行累加的函数值
 */
function sum_HOF(a, b, next, term) {
  let res;
  if (a > b) {
    res = 0;
  } else {
    res = term(a) + sum_HOF(next(a), b, next, term);
  }
  return res;
}
// const getX = (x) => x;
// const square = (x) => x * x;
// const inc = (a) => a + 1;
// test sum_HOF

// const res = sum_HOF(1, 4, inc, square);
// console.log(res);

// const res_2 = sum_HOF(1, 4, inc, getX);
// console.log(res_2);

// const piSum_1 = piSum(1, 10000);
// console.log(piSum_1);

// const piTerm = (x) => 1 / (x * (x + 2));
// const next = (x) => x + 4
// const piSumRes = sum_HOF(1, 1000, next, piTerm)
// console.log(piSumRes)

function integral(f, a, b, dx) {
    const addDeltaX = (x) => x + dx;
    return dx * sum_HOF((a + dx / 2), b, addDeltaX, f);
}

// const cube = (x) => Math.pow(x, 3);
// console.log(cube(2))
// console.log('--integral--')
// const integral_1 = integral(cube, 0, 1, 0.01)
// console.log(integral_1)

// function <name>(a, b) {
//   let res;
//   if (a > b) {
//     res = 0;
//   } else {
//     res = term(a) + name(next(a), b)
//   }
// }

function simpson(f, a, b, n) {
  // 是否偶数
  const isEven = (num) => num % 2 === 0;

  const h = (b - a) / n;

  const yk = (k) => f(a + (k * h));

  const getCoefficient = (k) => {
    if (k === 0 || k === n){ 
      return 1;
    } else if (isEven(k)) {
      return 2;
    } else {
      return 4;
    }
  }
  const term = k => getCoefficient(k) * yk(k);

  const inc = x => x + 1;
  return (h * (sum_HOF(a, b, inc, term))) / 3;
}

console.log('cube 1 100')
const res_simpson = simpson(cube, 0, 1, 100);
console.log('res_simpson', res_simpson)

/**
 * 
 * @param {function} combiner 描述元素如何组合
 * @param {number} emptyValue 描述所有项都用完时的基本值
 * @param {function} term 应用在单个元素上的函数
 * @param {number} a 范围起点
 * @param {function} next 得到下一轮计算的起始值
 * @param {number} b 范围终点
 */
function accumulate(combiner, emptyValue, term, a, next, b) {

}