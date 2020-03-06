import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { editStory } from '../actions';
import { connect } from 'react-redux';
import useForm from '../Utils/useForm';
import styled from 'styled-components';
import { fetchStories } from '../actions';

const StylesBtn = styled.button`
  text-align: center;
  color: #EAE7DC; 
  padding: 3px;
  margin: 4px;
  background: #E85A4F;
  cursor: pointer;
  border-radius: 9px;
`;

// const StylesUpld = styled.button`
//   text-align: center;
//   color: E85A4F#; 
//   padding: 0px;
//   margin: 4px;
//   background: #EAE7DC;
//   cursor: pointer;
//   border-radius: 9px;
// `;

const StylesContainer = styled.section`
  text-align: right;
  color: #EAE7DC; 
  cursor: pointer;
  font-size: 1.3em;
  padding: 2px;
  margin: 2px;
`;


const EditForm = (props) => {
  const [formInputs, handleChange, clearForm] = useForm();
  const [editing, setEditing] = useState(false);
  const history = useHistory();


  const submitHandler = e => {
    e.preventDefault();
     const {name, content, image_URL, location, author, date, user_id} = formInputs;
    props.editStory({name, content, image_URL, location, author, date, user_id});

    clearForm();
    props.fetchStories();
    history.push('/dashboard');
  }
return (
  <StylesContainer>
    <section className='edit-container'>
      <div className='edit-top'>
         <div className='edit-image-container'>
            {/* <img src={uploadImg} alt='upload' />  */}
            {/* <p> Upload image</p> */}

         </div> 
        
      {editing && (
         <form id='edit-form' onSubmit={submitHandler} className='edit-form'>
             {/* put buttons/radio buttons here for public/private post option */}
             <div className='input-container title'>
                <label>Title</label>
                <input 
                type='text' 
                id='name'
                name='name'
                required
                value={formInputs.name || ''}
                onChange={handleChange}
                placeholder="Enter a title"
                />
             </div> 

             {/* <div className='input-container country'>
                <label>City/Town, State, Country</label>
                <input 
                type='text' 
                id='location'
                name='location'
                value={formInputs.location || ''}
                onChange={handleChange}
                placeholder="Enter a location"
                />
             </div> 
                
             <div className='input-container date'>
                <label>Choose a date for this trip</label>
                <input 
                type='text' 
                id='date'
                name='date'
                value={formInputs.date || ''}
                onChange={handleChange}
                placeholder="Enter an date"
                />
             </div> */}

             <div className='input-container user_id'>
                <label>User ID</label>
                <input 
                type='integer' 
                id='user_id'
                name='user_id'
                required
                value={formInputs.user_id || ''}
                onChange={handleChange}
                placeholder="Enter your user id"
                />
             </div>
        
        <div className='upload-bottom'>
          <label>Your amazing story goes here</label>
            <textarea 
            type='text' 
            id='content'
            name='content'
            required
            value={formInputs.content || ''}
            onChange={handleChange}
            placeholder="Enter your story"
            />

        </div> 
        </form>
        )}
        </div> 
        <StylesBtn>

        <div className='edit-btns'>
       {/* need to add into button? onClick={() => props.editStory(props)} */}
          <button className='edit-btn' form='edit-form' type='submit' >Edit Story</button>  
        </div>
        </StylesBtn>
    </section>
    </StylesContainer>
)    
}

export default connect(null, { editStory, fetchStories })(EditForm);
