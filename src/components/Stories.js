import React, { useEffect, useState } from 'react';
import axios from 'axios';
//may need to upgrade to AWA
import { deleteStory } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Story(props) {
    const [trip, setTrip] = useState([]);
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('username'));

    useEffect(() => {
        axios
        .get(`https://expat-journal.herokuapp.com/${props.match.params.id}`)
        .then(res => {
            setTrip(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    const TripActions = () => {
        if(currentUser === trip.user) {
            return (
                <div className='top-bar-actions'>
                  <Link className='edit-btn' to={`/edit/${props.match.params.id}`}>Edit Post</Link>  
                  <img onClick={() => {
                      props.deleteStory(props.match.params.id);
                      props.history.push('/dashboard');
                  }}
                  className='trash'
                //   get image and link from Daniel
                  src={''}
                  alt='delete story'
                  />
                </div>
            )
        }else {
            return (
               <div></div> // this is where we would put like, upvotes, and save buttons
            )
        }
    }

    return (
        <div className='edit-page'>
          <div className='story-card'>
              <div className='story-top'>
                <h1>{trip.name}</h1>
                <h3>story by: {trip.author} </h3>
                <p>{trip.location}</p>
              </div>

              <div className='story-user'>
                  {/* <div className='story-img'>
                    <img src={trip.image_URL} alt={trip.name}/>
                  </div> */}
                {/* If we want to put in images - they would go here   */}
                <div className='trip-info'>
                    <p>{trip.content}</p>
                </div>
              </div>
              {/* <div className='trip-likes'>2020 likes</div> */}
          </div>  
        </div>
    );
}

export default connect(
    null,
    { deleteStory }
)(Story);
