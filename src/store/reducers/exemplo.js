import { SET_EXAMPLE, SET_EXAMPLE_SELECTED_ID, SET_EXAMPLE_LOADING } from '../constants/exemplo';

export default function reducer(
    state = {
        exampleSelectedId: null,
        exampleList: [],
        exampleTotalAmount: null,
        examplePerPage: null,
        isLoading: false,
    },
    action,
) {
    switch (action.type) {
        case SET_EXAMPLE:
            return {
                ...state,
                exampleList: action.exampleList,
                exampleTotalAmount: action.exampleTotalAmount,
                examplePerPage: action.examplePerPage,
            };
        case SET_EXAMPLE_SELECTED_ID:
            return {
                ...state,
                exampleSelectedId: action.exampleSelectedId,
            };
        case SET_EXAMPLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            break;
    }
    return state;
}