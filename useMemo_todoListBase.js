import './App.css';
import { useReducer, useRef } from 'react'

// useState
// 1. Init state: 0;
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0;
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Tao function Reducer
// 4. Dispatch

const initState = {
  task: '',
  listTask: [] 
};

const SET_TASK = 'set_task';
const ADD_TASK = 'add_task';
const REMOVE_TASK = 'remove_task';

const setTask = payload => {
    return {
      type: SET_TASK,
      item: payload
    }
}

const addTask = payload => {
  return {
    type: ADD_TASK,
    item: payload
  }
}

const removeTask = payload => {
  return {
    type: REMOVE_TASK,
    item: payload
  }
}

const reducer = (state, action) => {
  console.log("Action: ", action);
  console.log("Prev state: ", state);

  let newState;

  switch(action.type) {
    case SET_TASK:
      // newState sẽ lấy các field của state và update lại field mong muốn
      newState = {
        ...state,
        task: action.item
      }
      break;
    case ADD_TASK:
      newState = {
        ...state,
        listTask: [...state.listTask, action.item] 
      }
      break;
      case REMOVE_TASK:
        const newTasks = [...state.listTask];
        newTasks.splice(action.item, 1);

        newState = {
          ...state,
          listTask: newTasks 
        }
        break;
    default:
      throw new Error("Invalid action.");
  }

  console.log("New state: ", newState);
  return newState
}


function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { task, listTask } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addTask(task));
    // reset input
    dispatch(setTask(''));

    // focus input
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <h2>Todo</h2>
      <input
        ref={inputRef}
        placeholder="Enter todo..." 
        value={ task }
        onChange={e => { 
          dispatch(setTask(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul> 
        {listTask.map((task, index) => (
          <li key={ index }>
            { task } 
            <span
              onClick={() => dispatch(removeTask(index))}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;