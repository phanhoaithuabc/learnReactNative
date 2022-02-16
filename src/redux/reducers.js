// import { SET_USER_NAME, SET_USER_AGE, INCREASE_AGE, GET_USERS } from './actions';

// const initialState = {
//     name: '',
//     age: 0,
//     users: [],
// }

// function userReducer(state = initialState, action) {
//     switch (action.type) {
//         case SET_USER_NAME:
//             return { ...state, name: action.payload };
//         case SET_USER_AGE:
//             return { ...state, age: action.payload };
//         case INCREASE_AGE:
//             return { ...state, age: state.age + 1 };
//         case GET_USERS:
//             return { ...state, users: action.payload };
//         default:
//             return state;
//     }
// }

// export default userReducer;

// ---------------------------------------------------------------//

// ToDo app
import { SET_TASKS, SET_TASK_ID } from './actions';

const initialState = {
    tasks: [],
    taskID: 1,
}

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TASKS:
            return { ...state, tasks: action.payload };
        case SET_TASK_ID:
            return { ...state, taskID: action.payload };
        default:
            return state;
    }
}

export default taskReducer;