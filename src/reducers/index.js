import { combineReducers } from 'redux';
import reducerMeat from './reducerMeat';
import reducerVegetable from './reducerVegetable';

const rootReducer = combineReducers({
  // 結合したいreducerをどんどん追加していく
  reducerMeat,
  reducerVegetable,
});

export default rootReducer;
// あとは使いたいところから、rootReducerを呼び出せばOK
