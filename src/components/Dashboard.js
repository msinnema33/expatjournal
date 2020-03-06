import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../actions';
import EditForm from './EditForm';
import { deleteStory } from '../actions';
import { Link } from 'react-router-dom';
import UploadForm from './UploadForm';
import styled from 'styled-components';


const ExpatHeader = styled.header`
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 10px 0;
  font-size: 1.5em;
  border: solid;
  background-color: #E85A4F;
  color: #EAE7DC;
  display: inline-block;
  `;

  const UploadLinks = styled.div`
  margin-top: 5%;
  background-color: #E85A4F;
  box-sizing: border-box;
  height: 200px;
  width: 300px;
  border: 1px solid red;
  border-radius: 10px;
  margin-left: 255px;
  `;


  const StoryBox = styled.div`
  display: flex;
  flexwrap: wrap;
  // box-sizing: border-box;
  width: 100%;
  // border: 1px solid red;
  // background: #D8C3A5;
  justify-content: center;
  margin: auto;
  `;

const StoryLinks = styled.div`
  font-size: .8em;
  height: 200px;
  border-radius: 10px;
  // width: 25%;
  border: 1px solid green;
  background: #D8C3A5;
  opacity: 0.6;
  margin: 2%;

  .edit-btn{
    text-align: center;
    padding 3 px;
    margin: 4 px;
    cursor: pointer;
    border-radius: 9px;
    background: #8E8D8A;
    color: #EAE7DC;
  }
  .delete-btn{
    text-align: center;
    padding 3 px;
    margin: 4 px;
    cursor: pointer;
    border-radius: 9px;
    background: #E85A4F;
    color: #EAE7DC;
  }
  `;



const Dashboard = (props) => {

    useEffect(() => {
        props.fetchStories();
        },[]);


    return (
      <div className='main'>
          <ExpatHeader>
        <div className='new-posts'> New posts from Expats</div>
        </ExpatHeader>
        <StoryBox>
        <>
            {props.stories.map(story => {
                // console.log(story);
                return (
                <div>
                    <StoryLinks>
                    <div id={story.id} className='story'>

      <Link to={ `/api/stories/${story.id}`}>
                                {''}
                                <img src={story.image_URL} /> 
                                <h1>{story.name}</h1>
                            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> af53a6972af98b2667dae96c932ef92601f1198b
=======

>>>>>>> 5366d7c3a4f470d0d7fcd85a2e6717637fa64b41
                      <div className='function-btns'>
                        {/* need to setEditing(true) in EditForm while still passing in the story props */}
                          <button className='edit-btn' type='submit' onClick={() => props.EditForm(props)}>Edit Story</button>
                          <button className='delete-btn' type='submit'onClick={() => props.deleteStory(story.id)}>Delete Story</button>
                      </div>
                    </div>
                    </StoryLinks>
                </div>
                );
            })}
<<<<<<< HEAD
<<<<<<< HEAD
        </>
=======

        </div>
>>>>>>> af53a6972af98b2667dae96c932ef92601f1198b
=======

        </>


        </div>

>>>>>>> 5366d7c3a4f470d0d7fcd85a2e6717637fa64b41
        </StoryBox>

            <UploadLinks>
                <UploadForm component={UploadForm}/>
            </UploadLinks>
      </div>
    );
}

const mapStateToProps = state => {
    return {
        stories: state.stories,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchStories, deleteStory, EditForm }
)(Dashboard);

