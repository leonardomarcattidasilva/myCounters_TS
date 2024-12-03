import './counter.css'
import { useAppDispatch, useAppSelector } from '../store/hook';

const Counter = () => {
   const value = useAppSelector(state => state.counter.value)
   return (
      <h1 className='counter'>{value}</h1>
   )
}

export default Counter;