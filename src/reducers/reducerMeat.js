import { SELL_MEAT } from './actionTypes';

const reducerMeat = (state = [], action) => {
  // stateはオブジェクト型で受け取りたいため、空の[]を設定
  switch (action.type) {
    case SELL_MEAT:
      return {
        ...state, // オブジェクトを分解して、特定の要素だけ上書きできるように「...」を記述
        numOfMeat: state.numOfMeat - 1,
      };
    default:
      return state;
  }
};

export default reducerMeat;
