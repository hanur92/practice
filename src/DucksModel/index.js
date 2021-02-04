const { createActions } = require("redux-actions");
const { handleActions } = require("redux-actions");
const { combineActions } = require("redux-actions");
// const { INCREMENT } = require("../actions/ActionTypes");

const { increment, decrement } = createActions({
  INCREMENT: (amount) => ({ amount }),
  DECREMENT: (amount) => ({ amount: -amount }),
});
const { a, b } = { b: 1, a: 2 };

console.log(a);
console.log(b);

const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount };
    },
  },
  { counter: 10 }
);

console.log(increment());
console.log(decrement());

// expect(reducer({ counter: 5 }, increment(5))).to.deep.equal({ counter: 10 });
// expect(reducer({ counter: 5 }, decrement(5))).to.deep.equal({ counter: 0 });
// expect(reducer({ counter: 5 }, { type: "NOT_TYPE", payload: 1000 })).to.equal({
//   counter: 5,
// });
// expect(reducer(undefined, increment(5))).to.deep.equal({ counter: 15 });
