import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../store/reducers/root';
import { State } from '../store/reducers/meals';

const meals = (state: RootState) => state.meals;

export default (): [Dispatch<any>, State] => {
  const dispatch = useDispatch();
  const selector = useSelector(meals);
  return [dispatch, selector];
};
