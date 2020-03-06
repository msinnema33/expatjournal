import {
  FETCH_STORY,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_ERROR,
  ADD_STORY,
  ADD_STORY_SUCCESS,
  ADD_STORY_ERROR,
  DELETE_STORY,
  DELETE_STORY_SUCCESS,
  DELETE_STORY_ERROR,
  EDIT_STORY,
  EDIT_STORY_SUCCESS,
  EDIT_STORY_ERROR
} from '../actions';

const initialState = {
    stories: [],
    error: '',
    isFetching: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STORY:
            return {
                ...state,
               isFetching: true,
               error:false
            };
        case FETCH_STORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                stories: action.payload.reverse()
            };
        case FETCH_STORY_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case ADD_STORY:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case ADD_STORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                stories: [action.payload, ...state.stories]

            };
        case ADD_STORY_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case DELETE_STORY:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case DELETE_STORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false
            };
        case DELETE_STORY_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case EDIT_STORY:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case EDIT_STORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                stories: action.payload
            };
        case EDIT_STORY_ERROR:
            return {
                ...state,
                isFetching: false,
                error: true,
            }                

        default:
            return state;    
    }
};

export default reducer;