
import './App.css';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "./state/index"


function App() {

  const state = useSelector((state) => state.bank);
  const user=useSelector((state) => state.user);
  const prod=useSelector((state) => state.prod);
  console.log("length of products ==>",prod.arr.length)

  const dispatch = useDispatch();

  const { 
    depositMoney,
    withdrawMoney,
    addUser,
    addProd } = bindActionCreators(actionCreators, dispatch);
  
  console.log(state)

  const userdata={
    name:'akshay1',
    age:"12",
    class:13
  }

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>

      <p>------------------</p>
      <button onClick={() => addUser(userdata)}>Add User</button>
      <p>----{user.name}---{user.age}-----------</p>

      <p>------------------</p>
      <button onClick={() => addProd(12)}>push to array</button>
      <p>---------------</p>
    </div>
  );
}

export default App;
