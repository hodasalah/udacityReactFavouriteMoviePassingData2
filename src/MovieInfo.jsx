import React, { Component } from 'react';
import UsersList from './UsersList';

class MovieInfo extends Component{
  render(){
    const{movies , users , usersByMovie}= this.props;
    console.log(this.props)
    return(
      <div>
        {Object.keys(movies).map(key=>(
          	<div key={key}>
         		<h2>{movies[key].name}</h2>
            {!usersByMovie[key] || usersByMovie[key].length === 0 ? <p>no User Like this</p> 
              :<React.Fragment>
              	<p> Liked By : </p>
              	<UsersList usersWhoLiked={usersByMovie[key]} users={users}/>
              </React.Fragment>}
        	</div>
            )  
          
        )}
      </div>
      
      
    );
  }
}
export default MovieInfo;