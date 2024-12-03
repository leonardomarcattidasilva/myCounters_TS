import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useAppDispatch } from './store/hook';
import {add, del, amount} from './store/store'

const App = () => {
  const dispatch = useAppDispatch();

  const plus = () => {
    dispatch(add())
  }

  const minus = () => {
    dispatch(del())
  }

  const increment = (p: number) => {
    dispatch(amount(p))
  }

  return <div className="body">
      <Counter/>
      <div id='button_area'>
         <Button txt="Add" className='btn btn-success' onClick={plus} />
         <Button txt="Minus" className='btn btn-danger' onClick={minus}/>
         <Button txt="Increase" className='btn btn-warning' onClick={() => increment(5)} />
      </div>
   </div>
}

export default App;
