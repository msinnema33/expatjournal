import axios from 'axios';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

export const FETCH_STORY = 'FETCH_STORY';
export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS';
export const FETCH_STORY_ERROR = 'FETCH_STORY_ERROR';
export const ADD_STORY = 'ADD_STORY';
export const ADD_STORY_SUCCESS = 'ADD_STORY_SUCCESS';
export const ADD_STORY_ERROR = 'ADD_STORY_ERROR';
export const EDIT_STORY = 'EDIT_STORY';
export const EDIT_STORY_SUCCESS = 'EDIT_STORY_SUCCESS';
export const EDIT_STORY_ERROR = 'EDIT_STORY_ERROR';
export const DELETE_STORY = 'DELETE_STORY';
export const DELETE_STORY_SUCCESS = 'DELETE_STORY_SUCCESS';
export const DELETE_STORY_ERROR = 'DELETE_STORY_ERROR';

//Fetching stories from the API

export const fetchStories = () => {
    return function(dispatch) {
        dispatch({ type: FETCH_STORY});
        axios
          .get('https://expat-journal.herokuapp.com/api/stories')
          .then(res => {
            //   console.log(res);
              //console.log('data from story fetch', res.data)
              dispatch({ type: FETCH_STORY_SUCCESS, payload: res.data});
          })
          .catch(() => {
              dispatch({ type: FETCH_STORY_ERROR});
          });
    };
};

//Adding stories to API

export const addStory = add => dispatch => {
    // console.log(add);
    dispatch({ type: ADD_STORY });
    axiosWithAuth()
      .post('/api/stories', add)
      .then(res => {
        //   console.log(res.data)
        dispatch({ type: ADD_STORY_SUCCESS, payload: add});
      })
      .catch(err => {
          dispatch({ type: ADD_STORY_ERROR, payload: err})
      });
};

//Edit an existing story

export const editStory = storyInfo => dispatch => {
    console.log('from edit put', storyInfo);
    dispatch({ type: EDIT_STORY });
    axiosWithAuth()
      .put(`/api/stories/${storyInfo.id}`, storyInfo)
      .then(res => {
          dispatch({ type: EDIT_STORY_SUCCESS, payload: res.data});
          window.location.reload()})
      .catch(err => {
          dispatch({ type: EDIT_STORY_ERROR, payload: err})
      });
};

//Delete an existing story

export const deleteStory = id => dispatch => {
    console.log('from delete', id);
    dispatch({ type: DELETE_STORY});
    axiosWithAuth()
    .delete(`/api/stories/${id}`)
    .then(res => {
        dispatch({ type: DELETE_STORY_SUCCESS, payload: res.data});
        window.location.reload()})

    .catch(err => {
        dispatch({ type: DELETE_STORY_ERROR, payload: err})
    });
};